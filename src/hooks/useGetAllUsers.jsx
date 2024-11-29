import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/user";
import useGetCuttentUser from "./useGetCuttentUser";

const useGetAllUsers = () => {
  const user = useGetCuttentUser();
  const [data, setData] = useState({ loading: true });
  useEffect(() => {
    const getData = async () => {
      const res = await getAllUsers(user._id);
      setData(res);
    };
    getData();
  }, []);
  return data;
};

export default useGetAllUsers;
