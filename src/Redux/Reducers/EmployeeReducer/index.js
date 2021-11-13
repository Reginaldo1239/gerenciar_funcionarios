
import {
  EMPLOYEE_SET_EMPLOYEES,
  EMPLOYEE_SET_EMPLOYEE,
  EMPLOYEE_DELETE_EMPLOYEE
} from "../../../Constants/ActionTypes";
import { convertArrayToObject, filterObject } from '../../../Utils/Helpers';
const INIT_STATE = {};

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case EMPLOYEE_SET_EMPLOYEES: {
      return { ...convertArrayToObject(action?.payload, 'id') }
    }
    case EMPLOYEE_SET_EMPLOYEE: {
      return { ...state, [action.payload.id]: action?.payload }
    }
    case EMPLOYEE_DELETE_EMPLOYEE: {
      return { ...filterObject(state, (dataEmployee) => dataEmployee?.id !== action?.payload?.id) }
    }
    default:
      return state;
  }
}
