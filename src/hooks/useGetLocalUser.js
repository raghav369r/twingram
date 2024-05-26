import React, { useEffect } from "react";
import { decodeJwt, getJwt } from "../services/localSt";
import { useDispatch } from "react-redux";
import { setUser } from "../config/store/userReducer";

const useGetLocalUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getJwt();
    if (token) dispatch(setUser(decodeJwt(token)));
  }, []);
  return null;
};

export default useGetLocalUser;
