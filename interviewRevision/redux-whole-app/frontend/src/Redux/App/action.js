import axios from "axios";
import * as types from "./actionTypes";
import { API_BASE } from "@/lib/utils";





// const GetToken=()=>{
//   const token = useSelector((store)=>store.reducer_1.token)
//   return {token}
// }

const getBooks = (payload) => (dispatch) => {
  console.log("cbvgf");
  dispatch({ type: types.GET_BOOKS_REQUEST });

  return axios
    .get(`${API_BASE}/books`,payload)
    .then((r) => {
      console.log(r)
      console.log(r.data);
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: r.data.books,pagination:r.data.pagination });
    })
    .catch((e) => dispatch({ type: types.GET_BOOKS_FAILURE, payload: e }));
};

const updateBook = (payload,id,token) => (dispatch) => {
  dispatch({ type: types.PATCH_BOOK_REQUEST });

  return axios
    .patch(`${API_BASE}/books/edit/${id}`,payload, {
      headers: { Authorization: `bearer ${token}` },
    })
    .then(() => dispatch({ types: types.PATCH_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.PATCH_BOOK_FAILURE, payload: e }));
};

const addBook = (payload,token) => (dispatch) => {
  console.log(payload);
 
  // dispatch({ type: types.POST_BOOK_REQUEST });
  return axios
    .post(`${API_BASE}/books/add`, payload, {
      headers: { Authorization: `bearer ${token}` },
    })
    .then(() => dispatch({ type: types.POST_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.POST_BOOK_FAILURE, payload: e }));
};

const deleteBook = (id,token) => (dispatch) => {
  
  return axios
    .delete(`${API_BASE}/books/delete/${id}`,{
      headers: { Authorization: `bearer ${token}` }
    })
    .then(() => dispatch({ types: types.DELETE_BOOK_SUCCESS }))
    .catch((e) => dispatch({ type: types.DELETE_BOOK_FAILURE, payload: e }));
};

export { getBooks, updateBook, deleteBook, addBook };
