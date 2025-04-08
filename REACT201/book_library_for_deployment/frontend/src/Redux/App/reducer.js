import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  allbooks: [],
  isError: false,
  pagination: { page:1, limit:4, totalCount:0, totalPages:0 },
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS_REQUEST:
      return { ...oldState, isLoading: true };

    case GET_BOOKS_SUCCESS:
      return { ...oldState, isLoading: false, allbooks: payload,pagination:action.pagination };//action obj 
      // /me se destructure kra he pagination from login function in action.js


    case GET_BOOKS_FAILURE:
      return { ...oldState, allbooks: [], isError: true };
    default:
      return oldState;
  }
};

export { reducer };
