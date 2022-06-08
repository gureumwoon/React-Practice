import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk";

import user from "./modules/user";
import image from "./modules/image"
import post from "./modules/post";


const rootReducer = combineReducers({ user, image, post })
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

export default store;