import { SHOW_ALERT, HIDE_ALERT, ShowAlert, RemoveAlert } from './alertTypes';

export const showAlertAC = (msg: string, styles: string): ShowAlert => ({
  type: SHOW_ALERT,
  payload: {
    msg,
    styles,
  },
});

export const removeAlertAC = (): RemoveAlert => ({ type: HIDE_ALERT });
