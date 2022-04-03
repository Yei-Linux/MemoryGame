import { combineReducers } from "redux";
import { formReducer } from "./formReducer";

export const reducer = combineReducers({
  form: formReducer,
});
