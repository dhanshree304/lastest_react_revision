import axios from "axios";
import * as types from "./actionTypes";
import { BASE_URL } from "../Utils/utils";

const getTodos = () => (dispatch) => {
  dispatch({ type: types.GET_TODOS_REQUEST });
  return axios
    .get(`${BASE_URL}/get-todo`)
    .then((r) =>
      dispatch({ type: types.GET_TODOS_SUCCESS, payload: r.data.todo })
    )
    .catch((e) => dispatch({ type: types.GET_TODOS_FAILURE, payload: e }));
};

const postTodo = (payload) => (dispatch) => {
  dispatch({ type: types.POST_TODO_REQUEST });
  return axios
    .post(`${BASE_URL}/create-todo`, payload)
    .then((r) => dispatch({ type: types.POST_TODO_SUCCESS }))
    .catch((e) => dispatch({ type: types.POST_TODO_FAILURE, payload: e }));
};

const toggleTodo = (payload, id) => (dispatch) => {
  dispatch({ type: types.PATCH_TODO_REQUEST });
  return axios
    .patch(`${BASE_URL}/update-todo/${id}`, payload)
    .then((r) => dispatch({ type: types.PATCH_TODO_SUCCESS }))
    .catch((e) => dispatch({ type: types.PATCH_TODO_FAILURE, payload: e }));
};

const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_TODO_REQUEST });
  return axios
    .delete(`${BASE_URL}/delete-todo/${id}`)
    .then((r) => dispatch({ type: types.DELETE_TODO_SUCCESS }))
    .catch((e) => dispatch({ type: types.DELETE_TODO_FAILURE, payload: e }));
};

export { getTodos, postTodo, toggleTodo, deleteTodo };
