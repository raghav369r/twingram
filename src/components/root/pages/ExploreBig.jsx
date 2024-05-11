import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Like from "../../shared/Like";
import Avatar from "react-avatar";
import { Navigate } from "react-router-dom";
import ProfileNTime from "../../shared/ProfileNTime";

const ExploreBig = ({ post: data, handleClose }) => {
  const { post, user, liked } = data;
  if (!data) return null;

  return (
    <div className="flex md:flex-row flex-col h-full relative overflow-y-scroll">
      <img src={post.imageUrl} className="h-80 p-2 md:w-1/2 md:h-auto object-contain" />
      <div className="md:w-1/2  h-full flex flex-col p-4">
        <ProfileNTime post={post} user={user} />
        <hr className="border-neutral-700 mt-4" />
        <div className="md:h-full p-4">
          <h1 className="text-lg my-4">{post?.caption}</h1>
          <div className="my-2 text-gray-500 text-sm md:text-lg">
            {post?.tags?.map((ele) => "#" + ele)}
          </div>
        </div>
        <div className=" flex justify-between w-full h-fit p-4">
          <Like showLikes={true} postele={post} liked={liked} />
          <img
            src="./assets/icons/saveOutlined.svg"
            alt=""
            className=" size-7 cursor-pointer"
          />
        </div>
      </div>
      <h1
        onClick={handleClose}
        className="m-2 absolute right-0 top-0 cursor-pointer transition hover:scale-125"
      >
        <IoCloseSharp style={{ color: "white" }} className="size-8 p-1" />
      </h1>
    </div>
  );
};

export default ExploreBig;
