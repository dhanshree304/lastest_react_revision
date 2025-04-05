import { login} from "@/Redux/Auth/action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
const location=useLocation()
const commingFrom = location.state?.data
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const {name,value}=e.target;
    setLoginInfo((prev)=>({...prev,[name]:value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginInfo)).then(()=>navigate(commingFrom || "/"))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginInfo.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={loginInfo.password}
          name="password"
          onChange={handleChange}
        />
        <input type="submit" value="LOGIN" className="border bg-black text-white p-2 w-[90px]" />
      </form>

      <h1>Dont have an account ?<Link to="/signup">Sign up</Link></h1>
    </div>
  );
};

export default Login;
