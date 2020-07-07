import { ShowAlertType, RemoveAlertType } from './alert.types';
import { SHOW_ALERT, REMOVE_ALERT } from './alertTypes';

export const showAlertAC = (msg: string, styles: string): ShowAlertType => ({
  type: SHOW_ALERT,
  payload: {
    msg,
    styles,
  },
});

export const removeAlertAC = (): RemoveAlertType => ({ type: REMOVE_ALERT });
