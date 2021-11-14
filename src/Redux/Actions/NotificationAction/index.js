import { NOTIFICATION_TOOGLE_NOTIFICATION } from '../../../Constants/ActionTypes';

export const toogleNotification = (data) => {
  return { type: NOTIFICATION_TOOGLE_NOTIFICATION, payload: { show: data?.show, title: data?.title } };

};
