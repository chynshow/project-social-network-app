import { showAlertAC, removeAlertAC } from './alertActionCreators';
import { TAlertActions } from './alertActionCreators';
import { Dispatch } from 'redux';

export const showAlert = (msg: string, styles: string, time: number = 3000) => (
  dispatch: Dispatch<TAlertActions>
): void => {
  dispatch(showAlertAC(msg, styles));
  setTimeout(() => {
    dispatch(removeAlertAC());
  }, time);
};
