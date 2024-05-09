import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/user";

const useGetAllUsers = () => {
  const [data, setData] = useState({loading:true});
  useEffect(() => {
    const getData = async () => {
      const res = await getAllUsers();
      setData(res);
    };
    getData();
  }, []);
  return data;
};

export default useGetAllUsers;
