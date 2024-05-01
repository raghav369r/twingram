import axios from "axios";
import { Login_URL, Register_URL } from "../utils/endPoints";

export const login = async (data) => {
  try {
    const res = await axios.post(Login_URL, { ...data });
    return res.data;
  } catch (ex) {
    // console.log(ex);
    if (ex?.message == "Network Error")
      return { error: "Unable to connect to network" };
    if (ex?.response?.data) return ex?.response?.data;
    return ex;
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(Register_URL, { ...data });
    // console.log(res);
    return res.data;
  } catch (ex) {
    // console.log(ex);
    if (ex?.message == "Network Error")
      return { error: "Unable to connect to network" };
    if (ex?.response?.data) return ex?.response?.data;
    return ex;
  }
};
