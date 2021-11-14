import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import LoadingReducer from "./LoadingReducer";

export default combineReducers({
  Employee: EmployeeReducer,
  Loading: LoadingReducer,
})
