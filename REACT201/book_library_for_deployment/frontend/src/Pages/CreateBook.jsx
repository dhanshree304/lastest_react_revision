import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../Redux/App/action";
import { getToken } from "../Utils/utils";

const CreateBook = () => {
    const token = useSelector((store) => store.AuthReducer.token) || getToken();
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    author: "",
    category: "",
    releaseYear: "",
    imageUrl: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = () => {
    dispatch(createBook(bookDetails,token)).then((r) => navigate("/"));
  };

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
      <h1>CREATE BOOK</h1>

      <input
        type="text"
        placeholder="Enter bookName"
        value={bookDetails.bookName}
        onChange={(e) =>
          setBookDetails((prev) => ({ ...prev, bookName: e.target.value }))
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
        placeholder="Enter author"
        value={bookDetails.author}
        onChange={(e) =>
          setBookDetails((prev) => ({ ...prev, author: e.target.value }))
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
        placeholder="Enter category"
        value={bookDetails.category}
        onChange={(e) =>
          setBookDetails((prev) => ({ ...prev, category: e.target.value }))
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
        placeholder="Enter releaseYear"
        value={bookDetails.releaseYear}
        onChange={(e) =>
          setBookDetails((prev) => ({ ...prev, releaseYear: e.target.value }))
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
        placeholder="Enter image URL"
        value={bookDetails.imageUrl}
        onChange={(e) =>
          setBookDetails((prev) => ({ ...prev, imageUrl: e.target.value }))
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
        onClick={handleCreate}
        style={{
          width: "90%",
          backgroundColor: "#4dd2ff",
          color: "black",

          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          marginTop: "20px",
          marginBottom: "20px",
          transition: "background-color 0.3s",
        }}
      >
        ADD BOOK
      </button>
    </div>
  );
};

export { CreateBook };
