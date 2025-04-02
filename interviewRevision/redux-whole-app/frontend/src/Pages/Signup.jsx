import { signup } from "@/Redux/Auth/action";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const dispatch =useDispatch()
    const navigate=useNavigate()
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    name: "",
    role: "",
  });
const handleChange=(e)=>{
  const {name,value}=e.target;
setSignupInfo((prev)=>({...prev,[name]:value}))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(signup(signupInfo)).then(()=>navigate("/login"))
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={signupInfo.name}
          name="name"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={signupInfo.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={signupInfo.password}
          name="password"
          onChange={handleChange}
        />

        <select name="role" value={signupInfo.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>

        <input
          type="submit"
          value="SIGNUP"
          className="border bg-black text-white p-2 w-[90px]"
        />
      </form>
    </div>
  );
};

export default Signup;
