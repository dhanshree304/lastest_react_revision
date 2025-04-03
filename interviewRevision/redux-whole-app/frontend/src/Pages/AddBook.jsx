import { addBook } from "@/Redux/App/action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    imageUrl: "",
    catgeory: "",
    price: "",
  });

  const dispatch =useDispatch()
  const navigate=useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(addBook(book)).then(()=>navigate("/"))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="imageUrl"
          value={book.imageUrl}
        />
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <input
          type="text"
          onChange={handleChange}
          name="category"
          value={book.catgeory}
        />
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

export default AddBook;
