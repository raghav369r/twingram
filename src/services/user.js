import axios from "axios";
import { Profile_URL } from "../utils/endPoints";

export const getUserProfile = async (id) => {
  try {
    const res = await axios.get(Profile_URL + id);
    return res.data;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(Profile_URL);
    return res.data;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
};
