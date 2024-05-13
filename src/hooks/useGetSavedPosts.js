import React, { useEffect, useState } from "react";
import { getLikedPosts, getSavedPosts } from "../services/posts/post";

const useGetSavedPosts = (userId) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getSavedPosts(userId);
      setData(res);
    };
    getData();
  }, [userId]);
  return data;
};

export default useGetSavedPosts;
