import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { disLikePost, getPost, likePost } from "../../services/posts/post";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { isLiked } from "../../services/user";

const Like = ({ postele, showLikes }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const user = useSelector((store) => store.user);

  const getIsLiked = async (postId, userId) => {
    if (!userId || !postId) return setLiked(false);
    const res = await isLiked(postId, userId);
    if (!res.error) setLiked(res.liked);
  };

  useEffect(() => {
    setPost(postele);
    getIsLiked(postele?._id, user?._id);
  }, []);

  const handleLike = async () => {
    setLoading(true);
    var res;
    if (!liked) res = await likePost(post?._id, user?._id);
    else res = await disLikePost(post?._id, user?._id);
    // setPost(await getPost(post?._id));
    setPost(res?.post);
    getIsLiked(post?._id, user?._id);
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
