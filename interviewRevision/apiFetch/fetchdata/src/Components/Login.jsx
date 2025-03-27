import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { saveToken } = useContext(AuthContext);


  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value })); //{} chya key val spread krtoy
  };

  const handleSubmit = () => {
    return axios
      .post(`http://localhost:7676/user/login`, data)
      .then((r) => {
    saveToken(r.data.token)
        navigate("/");
      })

      .catch((e) => console.log(e));
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="enter email"
        onChange={handlechange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder="enter password"
        onChange={handlechange}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
