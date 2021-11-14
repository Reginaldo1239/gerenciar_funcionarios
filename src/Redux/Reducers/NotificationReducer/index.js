
import { NOTIFICATION_TOOGLE_NOTIFICATION } from "../../../Constants/ActionTypes";

const INIT_STATE = { show: false, title: '' };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case NOTIFICATION_TOOGLE_NOTIFICATION: {
      return { ...state,
         show: action?.payload?.show,
         title: action?.payload?.title
        };
    }
    default:
      return state;
  }
}
