import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { disLikePost, getPost, likePost } from "../../services/posts/post";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Like = ({ postele, showLikes }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    setPost(postele);
  }, []);

  const handleLike = async () => {
    setLoading(true);
    var res;
    if (!post?.liked) res = await likePost(post?._id, user?._id);
    else res = await disLikePost(post?.postId, user?._id);
    setLoading(false);
    if (!res.error) {
      var npost = { ...post };
      npost.liked ? npost.likes-- : npost.likes++;
      npost.liked = !npost.liked;
      setPost(npost);
    }
  };
  if (loading) return <Loading />;
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
