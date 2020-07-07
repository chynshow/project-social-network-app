import { showAlertAC, removeAlertAC } from './alertActionCreators';

export const showAlert = (msg: string, styles: string, time: number = 3000) => (
  dispatch: any
): void => {
  dispatch(showAlertAC(msg, styles));
  setTimeout(() => {
    dispatch(removeAlertAC());
  }, time);
};
