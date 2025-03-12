import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../Utils/utils";



const RequireAuth = ({ children }) => {

  const isAuth = useSelector((store) => store.AuthReducer.isAuth) || getToken()
  const location = useLocation()


  if(!isAuth){
   return  <Navigate to="/login" rplace state={{data:location.pathname}}/>

  }

  return children;
};

export { RequireAuth };
