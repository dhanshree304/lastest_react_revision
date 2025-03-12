import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatebook } from "../Redux/App/action";
import { API_BASE, getToken } from "../Utils/utils";

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    category: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBook({ ...book, [name]: value });
  // };

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

  const handleSubmit = () => {
    dispatch(updatebook(book, id,token)).then((r) => navigate("/"));
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
      <h1>EDIT PAGE</h1>
      <input
        type="text"
        value={book.bookName}
        name="bookName"
        onChange={(e) =>
          setBook((prev) => ({ ...prev, bookName: e.target.value }))
        }
        style={{
          height: "30px",
          width: "90%",
          border: "1px solid gray",
          outline: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      />
      <br />
      <input
        type="text"
        value={book.author}
        name="author"
        onChange={(e) =>
          setBook((prev) => ({ ...prev, author: e.target.value }))
        }
        style={{
          height: "30px",
          width: "90%",
          border: "1px solid gray",
          outline: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      />
      <br />
      <input
        type="text"
        value={book.category}
        name="category"
        onChange={(e) =>
          setBook((prev) => ({ ...prev, category: e.target.value }))
        }
        style={{
          height: "30px",
          width: "90%",
          border: "1px solid gray",
          outline: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          width: "90%",
          backgroundColor: "#4dd2ff",
          color: "black",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          marginTop: "30px",
          marginBottom: "20px",
          transition: "background-color 0.3s",
        }}
      >
        UPDATE BOOK
      </button>
    </div>
  );
};

export { Edit };
