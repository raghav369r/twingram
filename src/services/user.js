import axios from "./axiosInstance";
import {
  GetFollow_URL,
  GetIsLiked_URL,
  GetUnFollow_URL,
  Profile_URL,
} from "../utils/endPoints";

export const followAccount = async (userId1, userId2) => {
  try {
    const res = await axios.post(GetFollow_URL, { userId1, userId2 });
    return res.data;
  } catch (ex) {
    return { error: "error", message: "error connecting server!!" };
  }
};

export const unFollowAccount = async (userId1, userId2) => {
  try {
    const res = await axios.post(GetUnFollow_URL, { userId1, userId2 });
    return res.data;
  } catch (ex) {
    return { error: "error", message: "error connecting server!!" };
  }
};

export const getUserProfile = async (id) => {
  try {
    const res = await axios.get(Profile_URL + id);
    return res.data;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
};

export const getAllUsers = async (userId) => {
  if(!userId) return;
  try {
    const res = await axios.post(Profile_URL, { userId });
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
