import { combineReducers } from "redux";
import bugReducer from "./bugReducer";
import engineerReducer from "./engineerReducer";
import labelReducer from "./labelReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  bug: bugReducer,
  engineer: engineerReducer,
  label: labelReducer,
  status: statusReducer,
});
