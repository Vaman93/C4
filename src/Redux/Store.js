import { applyMiddleware, createStore } from "redux";
import { Webreducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(Webreducer, applyMiddleware(thunk));
