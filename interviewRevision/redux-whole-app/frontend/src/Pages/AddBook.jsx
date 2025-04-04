import { addBook } from "@/Redux/App/action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    imageUrl: "",
    category: "",
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
          className="border border-black"
          type="text"
          onChange={handleChange}
          name="imageUrl"
          value={book.imageUrl}
        />
        <input
          className="border border-black"
          type="text"
          onChange={handleChange}
          name="title"
          value={book.title}
        />
        <input
          className="border border-black"
          type="text"
          onChange={handleChange}
          name="category"
          value={book.category}
        />
        <input
          className="border border-black"
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
