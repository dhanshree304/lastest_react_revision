import { useState } from "react";
import {useDispatch} from "react-redux"
import {login} from "../Redux/Auth/action"
import {useNavigate,useLocation, Link} from "react-router-dom"

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch()
const navigate=useNavigate()
const location = useLocation()

const commingFrom = location.state?.data

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(login({ email, password })).then((r) => navigate(commingFrom || "/") );

}
 
  return (
    <div
    className="login-wrapper"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "auto",
        padding:"10px",
        
        
        margin: "auto",
        marginTop:"20px"
      }}
    >
      <h1>Well-come Again ! 💓</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            style={{
              height: "30px",
              width: "90%",
              border: "1px solid gray",
              outline: "none",
              borderRadius: "5px",
              marginTop: "30px",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
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
              marginTop: "30px",
            }}
          />
          <br />
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
              marginTop: "30px",
              marginBottom: "20px",
              transition: "background-color 0.3s",
            }}
          />
          <br />
          <label style={{}}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export { Login };
