import { createStore } from "redux";
import { reducer } from "./Reduce";
export const store = createStore(reducer);