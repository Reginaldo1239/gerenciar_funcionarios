import { LOADING_TOOGLE_LOADING } from '../../../Constants/ActionTypes';

export const toogleLoading = (show) => {

  return { type: LOADING_TOOGLE_LOADING, payload: { show:show } };

};
