import React, { useEffect, useState } from "react";
import { getFeed } from "../services/posts/post";

const useGetfeed = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await getFeed();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default useGetfeed;
