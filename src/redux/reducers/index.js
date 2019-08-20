import {combineReducers} from "redux";
import list from "./list";
import details from "./details";

const reducers = combineReducers({
  list,
  details
});

export default reducers;

