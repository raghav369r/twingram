import { jwtDecode } from "jwt-decode";

export const setJwt = (token) => {
  localStorage.setItem("twingram_token", token);
};
export const getJwt = () => {
  return localStorage.getItem("twingram_token");
};

export const removeJwt = () => {
  localStorage.removeItem("twingram_token");
};
export const decodeJwt = (token) => {
  const user = jwtDecode(token);
  return user;
};
