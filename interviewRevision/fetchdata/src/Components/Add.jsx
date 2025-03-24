import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [item, setItem] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setItem((prev)=>({...prev,[name]:value}));
  };
  const handleSubmit = () => {
    return axios
      .post(`http://localhost:8080/products`, item)
      .then((r) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <input
        type="text"
        name="image"
        value={item.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        value={item.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        value={item.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={item.price}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Add;
