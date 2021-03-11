import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import calculationsReducer from "./calculations/reducer";
const reducers = combineReducers({ calculations: calculationsReducer });
export default createStore(reducers, applyMiddleware(reduxThunk));
