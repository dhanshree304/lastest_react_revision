import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

import { reducer_1 } from "./Auth/reducer";
import { reducer_2 } from "./App/reducer";

const rootReducer = combineReducers({ reducer_1, reducer_2 });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
