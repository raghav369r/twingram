import React, { useEffect, useState } from "react";
import Like from "../../shared/Like";
import Avatar from "react-avatar";
import useGetProfile from "../../../hooks/useGetProfile";

const SmallPost = ({ ele }) => {
  const user = useGetProfile(ele?.ownerId);

  return (
    <div className="rounded-lg bg-neutral-800 relative group cursor-pointer">
      <img
        src={ele?.imageUrl}
        alt=""
        className="w-full aspect-square object-cover hover:object-contain"
      />
      <div className="hidden group-hover:flex justify-between bottom-0 items-center w-full p-2 absolute z-10 bg-gradient-to-t from-black">
        <div className="flex items-center gap-2">
          <Avatar name={user?.name} round={true} size="40" />
          <p>{user?.name}</p>
        </div>
        <div>
          <Like showLikes={false} postele={ele} />
        </div>
      </div>
    </div>
  );
};

export default SmallPost;
