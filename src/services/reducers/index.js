import { combineReducers } from "redux";
import { currentUser, counter } from "./reducer";

export const rootReducer = combineReducers({
  currentUser,
  counter,
});
