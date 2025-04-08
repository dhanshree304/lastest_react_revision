export const API_BASE = "https://book-management-api-3ruj.onrender.com";

export const getToken = () => {
  return localStorage.getItem("booklab_token");
};
