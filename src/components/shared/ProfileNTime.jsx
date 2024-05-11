import React from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

const ProfileNTime = ({ user, post }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (user?._id) navigate("/user/" + user._id);
  };
  return (
    <div className="flex gap-4 w-full items-center">
      <div className="size-10 md:size-16">
        <Avatar
          name={user?.name}
          size="100%"
          round={true}
          className="cursor-pointer"
          onClick={handleNavigate}
        />
      </div>
      <div>
        <h1 className="font-semibold text-md md:text-xl">{user?.name}</h1>
        <h2 className="text-gray-500 text-md md:text-lg">
          12 hours ago . {post?.location}
        </h2>
      </div>
    </div>
  );
};

export default ProfileNTime;
