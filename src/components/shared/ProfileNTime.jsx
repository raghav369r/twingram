import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

const ProfileNTime = ({ user, post }) => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const handleNavigate = () => {
    if (user?._id) navigate("/user/" + user._id);
  };
  useEffect(() => {
    const currDate = new Date();
    const { uploadTime } = post;
    const minutesDiff = differenceInMinutes(currDate, uploadTime);
    const hoursDiff = differenceInHours(currDate, uploadTime);
    const daysDiff = differenceInDays(currDate, uploadTime);
    const weeksDiff = differenceInWeeks(currDate, uploadTime);
    // console.log(minutesDiff, hoursDiff, daysDiff, weeksDiff);
    if (weeksDiff > 10) setTime(uploadTime.getDate());
    else if (weeksDiff) setTime(weeksDiff + " weeks ago");
    else if (daysDiff) setTime(daysDiff + " days ago");
    else if (hoursDiff) setTime(hoursDiff + " hours ago");
    else if (minutesDiff) setTime(minutesDiff + " weeks ago");
    else setTime(currDate.Date());
  }, []);
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
          {time} . {post?.location}
        </h2>
      </div>
    </div>
  );
};

export default ProfileNTime;
