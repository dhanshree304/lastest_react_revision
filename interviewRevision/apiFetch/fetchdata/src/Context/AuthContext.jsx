import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("api-fetch"));

  const saveToken = (newToken) => {
    setToken(newToken);
    console.log(newToken);
    localStorage.setItem("api-fetch", newToken);
  };
  const removeToken = (newToken) => {
    setToken(null);
    localStorage.removeItem("api-fetch");
  };

  useEffect(() => {
    const storeToken = localStorage.getItem("api-fetch");
    if (storeToken) {
      setToken(storeToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveToken, removeToken, token }}>
      {children}
    </AuthContext.Provider>
  );
};
