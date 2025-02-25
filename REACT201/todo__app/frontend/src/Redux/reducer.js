import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS_REQUEST: {
      return { ...oldState, isLoading: true };
    }
    case GET_TODOS_SUCCESS: {
      return { ...oldState, isLoading: false, todos: payload };
    }
    case GET_TODOS_FAILURE: {
      return { ...oldState, isError: true, todos: [] };
    }

    default:
      return oldState;
  }
};
export { reducer };
