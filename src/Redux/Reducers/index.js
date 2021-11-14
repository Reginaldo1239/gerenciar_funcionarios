import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import LoadingReducer from "./LoadingReducer";
import NotificationReducer from "./NotificationReducer";

export default combineReducers({
  Employee: EmployeeReducer,
  Loading: LoadingReducer,
  Notification:NotificationReducer
})
