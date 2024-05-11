import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { FaEdit } from "react-icons/fa";

import SmallPost from "./SmallPost";
import useGetProfile from "../../../hooks/useGetProfile";
// import useGetAllUserPosts from "../.. /../hooks/useGetAllposts";
import useGetCurrentUser from "../../../hooks/useGetCuttentUser";
import useGetLikedPosts from "../../../hooks/useGetLikedPosts";
import AbsolutePost from "../../shared/AbsolutePost";

const User = () => {
  const { userId } = useParams();
  const currUser = useGetCurrentUser();
  const [state, setState] = useState("posts");
  const [show, setShow] = useState(-1);
  const data = useGetProfile(userId);
  const { userProfile, posts } = data;
  const likedPosts = useGetLikedPosts(userId);

  return (
    <div className="p-5 md:p-14 h-screen overflow-y-scroll">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-center md:flex-row gap-10 items-center">
          <div className="size-32">
            <Avatar size="100%" name={userProfile?.name} round={true} />
          </div>
          <div className="flex flex-col justify-between items-baseline">
            <div className="">
              <h1 className="text-4xl">{userProfile?.name}</h1>
              <p className="text-gray-500 text-xl">
                {"@" + userProfile?.email?.split("@")[0]}
              </p>
            </div>
            <h1 className="">
              {userProfile?.bio || "Iam who iam and thats all i can be"}
            </h1>
            <div className="flex gap-5 my-5">
              <h1 className="text-xl">
                <span className="text-blue-600 mr-2">{userProfile?.posts}</span>
                posts
              </h1>
              <h1 className="text-xl">
                <span className="text-blue-600 mr-2">
                  {userProfile?.followers}
                </span>
                Followers
              </h1>
              <h1 className="text-xl">
                <span className="text-blue-600 mr-2">
                  {userProfile?.following}
                </span>
                Following
              </h1>
            </div>
          </div>
        </div>
        {userId == currUser?._id && (
          <button className="flex px-6 py-2 bg-neutral-700 bg-opacity-55 rounded-md items-center gap-2">
            <FaEdit className="" />
            <p>Edit profile</p>
          </button>
        )}
      </div>
      <div className="py-10">
        <ul className="grid grid-cols-4 cursor-pointer md:w-2/3">
          <li
            onClick={() => setState("posts")}
            className={`text-center py-2 text-lg bg-neutral-800 bg-opacity-40 rounded-l-md ${
              state === "posts" && " bg-white"
            }`}
          >
            posts
          </li>
          <li
            onClick={() => setState("liked")}
            className={`text-center py-2 text-lg bg-neutral-800 bg-opacity-40 ${
              state === "liked" && " bg-white"
            }`}
          >
            liked
          </li>
          <li
            onClick={() => setState("saved")}
            className={`text-center py-2 text-lg bg-neutral-800 bg-opacity-40 ${
              state === "saved" && " bg-white"
            }`}
          >
            saved
          </li>
          <li
            className={`text-center py-2 text-lg bg-neutral-800 bg-opacity-40 rounded-r-md ${
              state === "" && " bg-white"
            }`}
          >
            tagged
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4">
        {state === "posts" &&
          posts?.map((ele, ind) => <div key={ind} onClick={()=>setShow(ind)}><SmallPost ele={ele} /></div>)}
        {state === "liked" &&
          likedPosts?.map((ele, ind) => <div key={ind} onClick={()=>setShow(ind)}><SmallPost ele={ele} /></div>)}
        {state === "saved" && (
          <h1 className="text-center text-xl">No Saved Posts</h1>
        )}
      </div>
      <AbsolutePost
        data={(state == "posts" && posts) || (state == "liked" && likedPosts)}
        setShow={setShow}
        show={show}
      />
    </div>
  );
};

export default User;
