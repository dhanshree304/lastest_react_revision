import axios from "axios";
import * as types from "./actionTypes";
import { API_BASE } from "@/Utils/util";

const getBooks = () => (dispatch) => {
  console.log("cbvgf");
  dispatch({ type: types.GET_BOOKS_REQUEST });

  return axios
    .get(`${API_BASE}/books`)
    .then((r) => {
      console.log(r);
      console.log(r.data);
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: r.data.books });
    })
    .catch((e) => dispatch({ type: types.GET_BOOKS_FAILURE, payload: e }));
};

const updateBook = (id) => (dispatch) => {
  dispatch({ type: types.PATCH_BOOK_REQUEST });
  return axios
    .patch(`${API_BASE}/books/edit/${id}`)
    .then(() => dispatch({ types: types.PATCH_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.PATCH_BOOK_FAILURE, payload: e }));
};

const addBook = () => (dispatch) => {
  dispatch({ type: types.POST_BOOK_REQUEST });
  return axios
    .get("${API_BASE}/books/add")
    .then(() => dispatch({ types: types.POST_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.POST_BOOK_FAILURE, payload: e }));
};

const deleteBook = () => (dispatch) => {
  return axios
    .delete("${API_BASE}/books/delete")
    .then(() => dispatch({ types: types.DELETE_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.DELETE_BOOK_FAILURE, payload: e }));
};

export { getBooks, updateBook, deleteBook, addBook };
