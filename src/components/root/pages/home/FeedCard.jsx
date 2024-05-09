import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { IoIosHeart } from "react-icons/io";
import Like from "../../../shared/Like";

const FeedCard = ({ data }) => {
  const navigate = useNavigate();
  const [doubleTap, setDoubleTap] = useState(false);
  const [likedd, setLikedd] = useState(false);
  const [saved, setSaved] = useState(false);
  const { post, user, liked } = data;
  const handleNavigate = () => {
    if (user?._id) navigate("/user/" + user._id);
  };

  const handleDoubleTap = () => {
    setLikedd(true);
    setDoubleTap(true);
    setTimeout(() => {
      setDoubleTap(false);
    }, 1000);
  };

  return (
    <div className="rounded-xl p-4 m-2 md:p-8 md:m-8 border border-gray-700">
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
      <h1 className="my-2 text-sm md:text-lg">{post?.caption}</h1>
      <div className="my-2 text-gray-500 text-sm md:text-lg">
        {post?.tags?.map((ele) => "#" + ele)}
      </div>
      <div
        className="w-full rounded-xl bg-neutral-800 flex justify-center items-center relative"
        onDoubleClick={handleDoubleTap}
      >
        <img
          src={post?.imageUrl}
          alt=""
          className="max-h-96 max-w-full object-cover hover:object-contain select-none"
        />
        {doubleTap && (
          <IoIosHeart
            style={{ color: "white" }}
            className="size-28 transition delay-150 absolute z-10"
          />
        )}
      </div>
      <div className="mx-2 flex justify-between mt-4">
        <Like showLikes={true} postele={post} liked={liked} />
        {saved ? (
          <img
            onClick={() => setSaved(!saved)}
            src="./assets/icons/saveFilled.svg"
            alt=""
            className="invert transition brightness-0 size-7 cursor-pointer"
          />
        ) : (
          <img
            onClick={() => setSaved(!saved)}
            src="./assets/icons/saveOutlined.svg"
            alt=""
            className="size-7"
          />
        )}
      </div>
    </div>
  );
};

export default FeedCard;
