import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import Like from "../../../shared/Like";
import ProfileNTime from "../../../shared/ProfileNTime";
import Save from "../../../shared/Save";

const FeedCard = ({ data }) => {
  const navigate = useNavigate();
  const [doubleTap, setDoubleTap] = useState(false);
  const [likedd, setLikedd] = useState(false);
  const { post, user, liked, saved } = data;

  const handleDoubleTap = () => {
    setLikedd(true);
    setDoubleTap(true);
    setTimeout(() => {
      setDoubleTap(false);
    }, 1000);
  };

  return (
    <div className="rounded-xl p-4 m-2 md:p-8 md:m-8 border border-gray-700">
      <ProfileNTime user={user} post={post} />
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
        <Save postele={post} savedp={saved} />
      </div>
    </div>
  );
};

export default FeedCard;
