import axios from "axios";
import * as types from "./actionTypes";
import { API_BASE, getToken } from "../../Utils/utils";

const getAllBooks = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST });
  return axios
    .get(`${API_BASE}/book`, payload)
    .then((r) => {
      console.log(r);
      console.log(r.data);
      dispatch({
        type: types.GET_BOOKS_SUCCESS,
        payload: r.data.books,
        pagination:r.data.pagination,
      });
    })
    .catch((e) => dispatch({ type: types.GET_BOOKS_FAILURE, payload: e }));
};

const updatebook = (payload, id,token) => (dispatch) => {
  dispatch({ type: types.PATCH_BOOK_REQUEST });
  return axios
    .patch(`${API_BASE}/book/edit/${id}`, payload, {
      headers: { Authorization: `bearer ${token}` }
    })
    .then((r) => dispatch({ type: types.PATCH_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.PATCH_BOOK_FAILURE }));
};

const createBook = (payload,token) => (dispatch) => {
  dispatch({ type: types.POST_BOOK_REQUEST });
  return axios
    .post(`${API_BASE}/book/create`, payload,{headers: { Authorization: `bearer ${token}` }})
    .then((r) => dispatch({ type: types.POST_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.POST_BOOK_FAILURE }));
};
export { getAllBooks, updatebook, createBook };
