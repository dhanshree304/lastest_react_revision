import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, USER_LOGOUT } from "./actionTypes";

const initialState = {
  isAuthLoading: false,
  isAuth: false,
  token: "",
  isAuthError: false,
};
const saveToken=(token)=>{
localStorage.setItem("booklab_token",token)
}

const removeUser=()=>{
  localStorage.removeItem("booklab_token");
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}= action;
switch (type) {
  case POST_LOGIN_REQUEST:
    return { ...oldState, isAuthLoading: true };

  case POST_LOGIN_SUCCESS:
    saveToken(payload)//r.data.token
    return { ...oldState, isAuthLoading: false, isAuth: true, token: payload };

  case POST_LOGIN_FAILURE:
    return { ...oldState, isAuth: false, token: "", isAuthError: true };
  case USER_LOGOUT:
    removeUser()
    return { ...oldState, isAuth: false, token: "", isAuthError: false };

  default:
    return oldState;
}
}

export {reducer}