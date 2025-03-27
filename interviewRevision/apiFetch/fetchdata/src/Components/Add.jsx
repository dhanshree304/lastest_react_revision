import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Add = () => {
  const [item, setItem] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });
  const navigate = useNavigate();
const {token} = useContext(AuthContext)


  const handleChange = (e) => {
    const {name,value} = e.target;
    setItem((prev)=>({...prev,[name]:value}));
  };
  const handleSubmit = () => {
    return axios
      .post(`http://localhost:7676/product/add`, item,{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      .then((r) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter image URL"
        name="image"
        value={item.image}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        value={item.title}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter category"
        name="category"
        value={item.category}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Enter price"
        name="price"
        value={item.price}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Add;
