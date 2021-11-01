import { combineReducers } from "redux";
import bizUrlSelector from "./bizUrlSelector";
import cdbizReducer from "./cdbiz";

export default function reducer() {
    return combineReducers({ bizUrlSelector, cdbizReducer });
}
