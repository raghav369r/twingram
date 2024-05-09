import React from "react";
import Like from "../../shared/Like";
import Avatar from "react-avatar";

const SmallPost = ({ ele }) => {
  const { post, user, liked } = ele;
  return (
    <div className="rounded-lg bg-neutral-800 relative group cursor-pointer">
      <img
        src={post?.imageUrl}
        alt=""
        className="w-full aspect-square object-cover hover:object-contain"
      />
      <div className="hidden group-hover:flex justify-between bottom-0 items-center w-full p-2 absolute z-10 bg-gradient-to-t from-black">
        <div className="flex items-center gap-2">
          <Avatar name={user?.name} round={true} size="40" />
          <p className="overflow-hidden">{user?.name}</p>
        </div>
        <div>
          <Like showLikes={false} postele={ele} liked={liked} />
        </div>
      </div>
    </div>
  );
};

export default SmallPost;
