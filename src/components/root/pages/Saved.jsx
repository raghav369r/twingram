import React, { useState } from "react";
import useGetSavedPosts from "../../../hooks/useGetSavedPosts";
import useGetCurrentUser from "../../../hooks/useGetCuttentUser";
import SmallPost from "../../root/pages/SmallPost";
import AbsolutePost from "../../shared/AbsolutePost";

const Saved = () => {
  const user = useGetCurrentUser();
  const savedPosts = useGetSavedPosts(user?._id);
  const [show, setShow] = useState(-1);
  return (
    <div className="p-2 md:p-10 h-[100dvh] overflow-y-scroll">
      <h1 className="text-3xl font-semibold my-10">Saved Posts</h1>
      {savedPosts.length == 0 && <h1 className="text-3xl">No saved posts</h1>}
      <div className="grid grid-cols-3 gap-1">
        {savedPosts?.map?.((ele, ind) => (
          <div key={ind} onClick={() => setShow(ind)}>
            <SmallPost ele={ele} />
          </div>
        ))}
      </div>
      <AbsolutePost data={savedPosts} setShow={setShow} show={show} />
    </div>
  );
};

export default Saved;
