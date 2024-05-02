import { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import Like from "../../../shared/Like";
import Avatar from "react-avatar";
import { getUserProfile } from "../../../../services/user";

const FeedCard = ({post}) => {

  const [user,setUser]=useState(null);
  const [liked, setLiked] = useState(false);
  const [doubleTap, setDoubleTap] = useState(false);

  useEffect(()=>{
    const getUser=async()=>{
      const res=await getUserProfile(post.ownerId);
      setUser(res);
    }
    getUser();
  },[])

  const handleDoubleTap = () => {
    setLiked(true);
    setDoubleTap(true);
    setTimeout(() => {
      setDoubleTap(false);
    }, 500);
  };

  return (
    <div className="rounded-xl p-8 m-8 border border-gray-700">
      <div className="flex gap-4 w-full items-center">
        <div className="size-16">
          <Avatar name={user?.name} size="100%" round={true} />
        </div>
        <div>
          <h1 className="font-semibold">{user?.name}</h1>
          <h2 className="text-gray-500">12 hours ago . {post?.location}</h2>
        </div>
      </div>
      <h1 className="my-4">{post?.caption}</h1>
      <div className="my-2 text-gray-500">{post?.tags?.map((ele)=>"#"+ele)}</div>
      <div
        className="w-full rounded-xl bg-neutral-800 flex justify-center items-center relative"
        onDoubleClick={handleDoubleTap}
      >
        <img src={post?.imageUrl} alt=""/>
        {doubleTap && (
          <IoIosHeart
            style={{ color: "red" }}
            className="size-40 animate-ping duration-1000 absolute z-10"
          />
        )}
      </div>
      <div className="mx-2 flex justify-between mt-4">
        <Like showLikes={true} />
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
