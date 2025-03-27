import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProductCard = ({ product, fetchData }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    return axios
      .delete(`http://localhost:7676/product/delete/${product._id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((r) => {
        fetchData();
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <img src={product.image} alt="" height="200" width="200" />
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <h3>{product.price}</h3>
      <h3>{product.rate}</h3>
      <button onClick={handleDelete}>DELETE</button>
      <Link to={`/product/edit/${product._id}`}>
        <button>EDIT</button>
      </Link>

      <Link to={`/product/${product._id}`}>
        <button>SINGLE PRODUCT</button>
      </Link>
    </div>
  );
};

export default ProductCard;
