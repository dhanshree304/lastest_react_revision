import { useState } from "react";
import { useDispatch } from "react-redux";
import {  signup } from "../Redux/Auth/action";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const [role,setRole] = useState("customer");
  const dispatch = useDispatch();
  const navigate = useNavigate();


 



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password ,name,role})).then((r) => navigate("/login"));
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
      <h1>Well-come !</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              height: "30px",
              width: "90%",
              border: "1px solid gray",
              outline: "none",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: "30px",
              width: "90%",
              border: "1px solid gray",
              outline: "none",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "30px",
              width: "90%",
              border: "1px solid gray",
              outline: "none",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          />
          <select
            onChange={(e) => setRole(e.target.value)}
            value={role}
            style={{
              width: "90%",
              marginTop: "20px",
              height: "30px",
              outline: "none",
            }}
          >
            <option value="">Select Role</option>
            <option value="customer">customer</option>
            <option value="seller">seller</option>
          </select>
          <input
            type="submit"
            value="SUBMIT"
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
          />
          <label>
            Already have an account ? <Link to="/login">Login</Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export { Signup };
