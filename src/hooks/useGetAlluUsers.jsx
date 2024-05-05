import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/user";

const useGetAlluUsers = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllUsers();
      setData(res);
    };
    getData();
  }, []);
  return data;
};

export default useGetAlluUsers;
