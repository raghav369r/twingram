import React, { useEffect, useState } from "react";
import { getLikedPosts } from "../services/posts/post";

const useGetLikedPosts = (userId) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await getLikedPosts(userId);
      setData(res);
    };
    getData();
  }, [userId]);
  return data;
};

export default useGetLikedPosts;
