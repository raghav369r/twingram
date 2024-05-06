import axios from "axios";
import { GetIsLiked_URL, Profile_URL } from "../utils/endPoints";

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

export const isLiked = async (postId, userId) => {
  try {
    const res = await axios.post(GetIsLiked_URL, { postId, userId });
    return res.data;
  } catch (ex) {
    return { error: ex, message: "Some Thing went wrong!!" };
  }
};
