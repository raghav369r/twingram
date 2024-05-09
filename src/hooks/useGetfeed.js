import React, { useEffect, useState } from "react";
import { getFeed } from "../services/posts/post";
import { useSelector } from "react-redux";

const useGetfeed = () => {
  const [data, setData] = useState({ loading: true });
  const user = useSelector((store) => store.user);
  const getData = async () => {
    if (!user)
      setData({ error: "no loged in user!!", message: "login to get feed!!" });
    else {
      const res = await getFeed(user._id);
      setData(res);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default useGetfeed;
