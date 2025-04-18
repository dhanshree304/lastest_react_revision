import { POST_BOOK_REQUEST } from "../App/actionTypes";
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, USER_LOGOUT } from "./actionTypes";


const tokenFromLs =localStorage.getItem("alot_books")


const initState = {
  isAuthLoading: false,
  isAuth: tokenFromLs ? true : false,
  token: tokenFromLs || "",
  isAuthError: false,
};

const saveToken=(token)=>{
    localStorage.setItem("alot_books",token)
}


const removeToken = () => {
  localStorage.removeItem("alot_books");
};



const reducer_1 = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_LOGIN_REQUEST:
      return { ...oldState, isAuthLoading: true };

    case POST_LOGIN_SUCCESS:
        saveToken(payload)
      return { ...oldState, isAuthLoading: false,token:payload,isAuth:true };

    case POST_LOGIN_FAILURE:
      return { ...oldState, token:"",isAuth:false,isAuthError:true };

    case USER_LOGOUT:
        removeToken()
      return { ...oldState };
    default:
      return oldState;
  }
};

export {reducer_1}
