import { showAlertAC, removeAlertAC } from './alertActionCreators';
import { AlertActions } from './alertTypes';
import { Dispatch } from 'redux';

export const showAlert = (msg: string, styles: string, time: number = 3000) => (
  dispatch: Dispatch<AlertActions>
): void => {
  dispatch(showAlertAC(msg, styles));
  setTimeout(() => {
    dispatch(removeAlertAC());
  }, time);
};
