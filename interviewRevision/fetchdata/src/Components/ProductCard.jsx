import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product,fetchData }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    return axios
      .delete(`http://localhost:8080/products/${product.id}`)
      .then((r) => {
        fetchData()
        navigate("/")})
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
      <Link to={`/edit/${product.id}`}>
        <button>EDIT</button>
      </Link>

      <Link to={`/product-detail/${product.id}`}>
        <button>SINGLE PRODUCT</button>
      </Link>
    </div>
  );
};

export default ProductCard;
