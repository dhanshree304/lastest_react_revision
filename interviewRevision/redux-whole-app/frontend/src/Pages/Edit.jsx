

import axios from "axios";
import { updateBook } from "../Redux/App/action";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE } from "../Utils/util";

const EditBook = () => {
  const [book, setBook] = useState({
  title:"",
  category:"",
  imageUrl:"",
  price:""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} =useParams()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

const fetchOneBook =async()=>{
try {
  const resp = await axios.get(`${API_BASE}/books/single-book/${id}`)
  setBook(resp.data)
  console.log(resp.data.book)
} catch (error) {
  console.log(error)
}
}

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(book,id)).then(() => navigate("/"));
  };

console.log(book)
  useEffect(()=>{
    fetchOneBook()
  },[id])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black "
          type="text"
          onChange={handleChange}
          name="imageUrl"
          value={book.imageUrl}
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="category"
          value={book.category}
        />
        <br />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          value={book.price}
        />
      </form>
    </div>
  );
};

export default EditBook;
