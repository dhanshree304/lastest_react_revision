


import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {reducer as AppReducer} from "./App/reducer"
import { reducer as AuthReducer } from "./Auth/reducer";



const rootReducer = combineReducers({AuthReducer,AppReducer})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}