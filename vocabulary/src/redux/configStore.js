import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import voca from "./modules/voca";

const middleWares = [thunk];
const rootReducer = combineReducers({ voca });
const enhancer = applyMiddleware(...middleWares)

const store = createStore(rootReducer, enhancer);

export default store;
