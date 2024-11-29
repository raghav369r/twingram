import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { removeFromSaved, savePost } from "../../services/posts/post";

const Save = ({ postele, savedp }) => {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(savedp);
  const user = useSelector((store) => store.user);

  const handleSave = async () => {
    setLoading(true);
    var res;
    if (!saved) res = await savePost(postele?._id, user?._id);
    else res = await removeFromSaved(postele?._id, user?._id);
    if (res.saved!=undefined) setSaved(res.saved);
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <div className="items-center" onClick={handleSave}>
      {saved ? (
        <img src="../assets/icons/saveFilled.svg" alt="" className="size-7 invert brightness-0" />
      ) : (
        <img src="../assets/icons/saveOutlined.svg" alt="" className="size-7"/>
      )}
    </div>
  );
};

export default Save;
