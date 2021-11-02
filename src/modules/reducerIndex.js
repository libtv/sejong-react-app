import { combineReducers } from "redux";
import bizUrlSelector from "./bizUrlSelector";
import menuSelector from "./menuSelector";

export default function reducer() {
    return combineReducers({ bizUrlSelector, menuSelector });
}
