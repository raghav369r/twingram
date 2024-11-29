import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { disLikePost, likePost } from "../../services/posts/post";
import { isLiked } from "../../services/user";

const Like = ({ postele, showLikes, liked: likedp }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(likedp);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    setPost(postele);
  }, []);

  const handleLike = async () => {
    setLoading(true);
    var res;
    if (!liked) res = await likePost(post?._id, user?._id);
    else res = await disLikePost(post?._id, user?._id);
    setPost(res?.post);
    setLiked(res?.liked);
    setLoading(false);
  };

  if (loading) return <Loading />;
  return (
    <div className="flex gap-1 items-center">
      {liked ? (
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
