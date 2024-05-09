import axios from "axios";
import {
  DisLikePost_URL,
  Feed_URL,
  GetLikedPosts_URL,
  GetPost_URL,
  LikePost_URL,
  Post_URL,
  RemoveFromSaved_URL,
  SavePost_URL,
  UserPosts_URL,
} from "../../utils/endPoints";

export const getLikedPosts = async (userId) => {
  try {
    const res = await axios.post(GetLikedPosts_URL, { userId });
    return res.data;
  } catch (ex) {
    return { error: ex, message: "unable to connect to server!!" };
  }
};

export const getPost = async (postId) => {
  try {
    const res = await axios.post(GetPost_URL, { postId });
    return res.data;
  } catch (ex) {
    return { error: ex, message: "unable to connect to server!!" };
  }
};

export const addPost = async (data) => {
  try {
    const res = await axios.post(Post_URL, { ...data });
    return res.data;
  } catch (ex) {
    return { error: ex };
  }
};

export const getFeed = async (userId) => {
  try {
    const res = await axios.post(Feed_URL, { userId });
    return res.data;
  } catch (ex) {
    console.log(ex);
    return { error: ex };
  }
};

export const getAllUserPosts = async (userId) => {
  try {
    const res = await axios.get(UserPosts_URL + userId);
    return res.data;
  } catch (ex) {
    console.log(ex);
    return { error: ex };
  }
};

export const likePost = async (postId, userId) => {
  try {
    const res = await axios.post(LikePost_URL, { userId, postId });
    return res.data;
  } catch (ex) {
    return { error: ex, message: "error connecting to server!!" };
  }
};

export const disLikePost = async (postId, userId) => {
  try {
    const res = await axios.post(DisLikePost_URL, { userId, postId });

    return res.data;
  } catch (ex) {
    return { error: ex, message: "error connecting to server!!" };
  }
};

export const savePost = async (userId, postId) => {
  try {
    const res = await axios.post(SavePost_URL, { userId, postId });

    return res.data;
  } catch (ex) {
    return { error: ex, message: "error connecting to server!!" };
  }
};

export const removeFromSaved = async (userId, postId) => {
  try {
    const res = await axios.post(RemoveFromSaved_URL, { userId, postId });

    return res.data;
  } catch (ex) {
    return { error: ex, message: "error connecting to server!!" };
  }
};
