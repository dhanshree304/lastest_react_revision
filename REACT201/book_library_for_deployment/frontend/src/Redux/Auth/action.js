import axios from "axios";
import * as types from "./actionTypes";
import { API_BASE } from "../../Utils/utils";

const login = (payload) => (dispatch) => {
  dispatch({type: types.POST_LOGIN_REQUEST});
  return axios
    .post(`${API_BASE}/login`, payload)
    .then((r) => {
        console.log(r)
        console.log(r.data);
      return dispatch({
        type: types.POST_LOGIN_SUCCESS,
        payload: r.data.token,
    });
})
    .catch((e) => dispatch({ type: types.POST_LOGIN_FAILURE, payload: e }));
};

const signup = (payload) => (dispatch) => {
  
  return axios
    .post(`${API_BASE}/signup`, payload)
    .then((r) => {
      console.log(r);
      console.log(r.data);
      return 
    })
    .catch((e) => dispatch({ type: types.POST_LOGIN_FAILURE, payload: e }));
};

export {login,signup}