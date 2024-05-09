import React, { useEffect, useState } from "react";
import { getAllUserPosts } from "../services/posts/post";
import { SiNetdata } from "react-icons/si";

const useGetAllUserPosts = (userId) => {
  const [posts, setPosts] = useState({loading:true});
  useEffect(() => {
    const getData = async () => {
      const pos = await getAllUserPosts(userId);
      setPosts(pos);
    };
    if (!userId) setPosts({ error: "error getting posts!!" });
    getData();
  }, [userId]);
  return posts;
};

export default useGetAllUserPosts;
