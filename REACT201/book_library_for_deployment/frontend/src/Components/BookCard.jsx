import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../Redux/App/action";
import { API_BASE, getToken } from "../Utils/utils";

const BookCard = ({ bookData }) => {
    const token = useSelector((store) => store.AuthReducer.token) || getToken();
  const dispatch = useDispatch();

  const handleDelete = () => {
    return axios
      .delete(`${API_BASE}/book/delete/${bookData._id}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((r) => dispatch(getAllBooks())); //?????????????ithe navigate to "/"
    //pn hou shkt n
  };
  return (
    <div
      style={{
        background: "#f4f4f4",

        padding: "10px",
        margin: "20px",
      }}
    >
      {/* https://tse3.mm.bing.net/th?id=OIP.Ih_EHFqgVncMLIoH20WaJwHaLQ&pid=Api&P=0&h=220 */}
      <img src="/book-cover2.png" alt="" height="200px" width="200px" />
      <h2>{bookData.bookName}</h2>
      <h3>{bookData.author}</h3>
      <h3>{bookData.category}</h3>
      <p>{bookData.releaseYear}</p>
      <div style={{ display: "flex", gap: "20px", marginLeft: "30px" }}>
        <Link to={`/edit/${bookData._id}`}>
          <button
            style={{
              backgroundColor: "#bcdfeb",
              cursor: "pointer",
              border: "none",
              height: "30px",
              borderRadius: "5px",
              width: "auto",
              padding: "0 13px",
            }}
          >
            EDIT
          </button>
        </Link>
        <Link to={`/book/${bookData._id}`}>
          <button
            style={{
              backgroundColor: "#bcdfeb",
              cursor: "pointer",
              border: "none",
              height: "30px",
              borderRadius: "5px",
              width: "auto",
              padding: "0 13px",
            }}
          >
            BOOK DETAILS
          </button>
        </Link>
        <Link>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: "#bcdfeb",
              cursor: "pointer",
              border: "none",
              height: "30px",
              borderRadius: "5px",
              width: "auto",
              padding: "0 13px",
            }}
          >
            DELETE
          </button>
        </Link>
      </div>
    </div>
  );
};

export { BookCard };
