import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
    age: "",
    role: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value })); //{} chya key val spread krtoy
  };

  const handleSubmit = () => {
    return axios
      .post(`http://localhost:7676/user/signup`, data)
      .then((r) => navigate("/user/login"))
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
      <input
        type="number"
        name="age"
        value={data.age}
        placeholder="enter age"
        onChange={handlechange}
      />

      <select name="role" onChange={handlechange}>
        <option value="">Select Role</option>
        <option value="customer">customer</option>
        <option value="seller">seller</option>
      </select>
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
};

export default Signup;
