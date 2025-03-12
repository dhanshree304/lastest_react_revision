import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER_LOGOUT } from "../Redux/Auth/actionTypes";
import { getToken } from "../Utils/utils";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth) || getToken()

  const logout = () => {
    dispatch({ type: USER_LOGOUT });
    window.location.reload()
  };

  return (
    <div
      style={{
        background:"white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 5px 10px",
        position: "sticky",
        top: 0,
        height: "60px",
        
      }}
    >
      <div>
        <img src="/nextbook.png" alt="" height="150px" width="150px" />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {isAuth ? (
          <button
            onClick={logout}
            style={{
              height: "30px",
              width: "auto",
              borderRadius: "40px",
              border: "1px solid gray",
              background: "#4dd2ff",
              padding: "0 12px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              style={{
                height: "30px",
                width: "auto",
                borderRadius: "40px",
                border: "1px solid gray",
                background: "#4dd2ff",
                padding: "0 12px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        )}
        {/* <Link to="/">HOME</Link> */}

        <Link to="/book/create">
          <button
            style={{
              height: "30px",
              width: "auto",
              borderRadius: "40px",
              border: "1px solid gray",
              background: "#4dd2ff",
              padding: "0 12px",
              cursor: "pointer",
            }}
          >
            +Add Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
