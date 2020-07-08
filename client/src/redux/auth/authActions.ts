import { initAppSuccessAC, initAppFailAC } from './authActionCreators';
import { showAlert } from './../alert/alertActions';

export const initApp = () => (dispatch: any) => {
  try {
    dispatch(initAppSuccessAC());
  } catch (error) {
    dispatch(initAppFailAC());
    showAlert('Initialization fail!', 'danger');
  }
};
