export const API_BASE = "http://localhost:3450";

export const getToken = () => {
  return localStorage.getItem("booklab_token");
};
