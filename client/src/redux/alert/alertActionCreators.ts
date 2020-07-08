import {
  SHOW_ALERT,
  HIDE_ALERT,
  ShowAlertType,
  RemoveAlertType,
} from './alertTypes';

export const showAlertAC = (msg: string, styles: string): ShowAlertType => ({
  type: SHOW_ALERT,
  payload: {
    msg,
    styles,
  },
});

export const removeAlertAC = (): RemoveAlertType => ({ type: HIDE_ALERT });
