

import axios from "axios";
import { updateBook } from "../Redux/App/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { API_BASE } from "@/lib/utils";

const EditBook = () => {

  const token =useSelector((store)=>store.reducer_1.token) 
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


  
 
    setBook((prev) => ({ ...prev, [name]: name==="price" ?Number(value) :value  }));
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
    delete book._id
    dispatch(updateBook(book,id,token)).then(() => navigate("/"));

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
          className="border border-black "
          type="text"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <br />
        <input
          className="border border-black "
          type="text"
          onChange={handleChange}
          name="category"
          value={book.category}
        />
        <br />
        <input
          className="border border-black "
          type="number"
          onChange={handleChange}
          name="price"
          value={book.price}
        />
        <Button type="submit">
          <input type="submit" value="EDIT BOOK" />
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
