
import { LOADING_TOOGLE_LOADING } from "../../../Constants/ActionTypes";

const INIT_STATE = { show: false };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOADING_TOOGLE_LOADING: {
      return { ...state, show: action?.payload?.show };
    }
    default:
      return state;
  }
}
