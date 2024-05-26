import { jwtDecode } from "jwt-decode";

export const setJwt = (token) => {
  localStorage.setItem("token", token);
};
export const getJwt = () => {
  return localStorage.getItem("token");
};

export const removeJwt = () => {
  localStorage.removeItem("token");
};
export const decodeJwt = (token) => {
  const user = jwtDecode(token);
  return user;
};
