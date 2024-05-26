import axios from "axios";
import { getJwt } from "./localSt";

const instance = axios.create();
instance.interceptors.request.use(
  (config) => {
    const token = getJwt();
    if (token) config.headers.Authorization = `Bearer ${token ? token : ""}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default instance;
