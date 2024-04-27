import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const FeedCard = () => {
  const [liked, setLiked] = useState(false);
  const [doubleTap, setDoubleTap] = useState(false);
  const handleDoubleTap = () => {
    setLiked(true);
    setDoubleTap(true);
    setTimeout(() => {
      setDoubleTap(false);
    }, 2000);
  };

  return (
    <div className="rounded-xl p-8 m-8 border border-gray-700">
      <div className="flex gap-4 w-full items-center">
        <div className="size-16 rounded-full bg-pink-500"></div>
        <div>
          <h1 className="font-semibold">Kingk</h1>
          <h2 className="text-gray-500">12 hours ago . kakinada</h2>
        </div>
      </div>
      <h1 className="my-4">Caption</h1>
      <p className="my-2 text-gray-500">#hashtags#friends#love</p>
      <div
        className="w-full h-96 rounded-xl bg-gray-800 flex justify-center items-center "
        onDoubleClick={handleDoubleTap}
      >
        {doubleTap && (
          <IoIosHeart
            style={{ color: "red"}}
            className="size-40 animate-ping duration-1000"
          />
        )}
      </div>
      <div className="mx-2 flex justify-between mt-4">
        {liked ? (
          <IoIosHeart
            style={{ color: "red" }}
            className="size-6 cursor-pointer"
            onClick={() => setLiked(!liked)}
          />
        ) : (
          <FaRegHeart
            className="size-6 cursor-pointer"
            onClick={() => setLiked(!liked)}
          />
        )}
        <img
          src="./assets/icons/saved.svg"
          alt=""
          className="invert transition brightness-0 size-7 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FeedCard;
