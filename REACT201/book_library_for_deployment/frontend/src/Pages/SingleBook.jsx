import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE, getToken } from "../Utils/utils";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const token = useSelector((store) => store.AuthReducer.token) || getToken();

  const fetchOneBook = async () => {
    try {
      const res = await axios.get(`${API_BASE}/book/${id}`, {
        headers: { Authorization: `bearer ${token}` },
      });
      setBook(res.data.book);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOneBook();
  }, [id]);

  return (
    <div
    className="login-wrapper"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "auto",
        padding: "10px",
       

        margin: "auto",
        marginTop: "20px",
      }}
    >
      <h1>BOOK DETAIL</h1>
      <div>
        <img src="/book-cover2.png" alt="" height="200px" width="200px" />
        <h2>Name : {book.bookName}</h2>
        <h3>Author : {book.author}</h3>
        <h3>Category : {book.category}</h3>
        <p>Release_Year : {book.releaseYear}</p>
      </div>
    </div>
  );
};

export { SinglePage };
