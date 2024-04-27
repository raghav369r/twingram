import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const Like = ({ postele, showLikes }) => {
  if (!postele) {
    postele = {
      liked: false,
      likes: 10,
      id: "",
    };
  }
  const [post, setPost] = useState(postele);
  const handleLike = () => {
    const state = { ...post };
    state.liked = !state?.liked;
    state.liked ? state.likes++ : state.likes--;
    setPost(state);
  };
  return (
    <div className="flex gap-1 items-center">
      {post?.liked ? (
        <IoIosHeart
          style={{ color: "red" }}
          className="size-6 cursor-pointer"
          onClick={handleLike}
        />
      ) : (
        <FaRegHeart className="size-6 cursor-pointer" onClick={handleLike} />
      )}
      {showLikes && <p>{post?.likes}</p>}
    </div>
  );
};

export default Like;
