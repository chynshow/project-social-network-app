export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlertAC = (msg: string, styles: string): TShowAlert => ({
  type: SHOW_ALERT,
  payload: {
    msg,
    styles,
  },
});

export const removeAlertAC = (): TRemoveAlert => ({ type: HIDE_ALERT });

export type TShowAlert = {
  type: typeof SHOW_ALERT;
  payload: {
    msg: string;
    styles: string;
  };
};

export type TRemoveAlert = {
  type: typeof HIDE_ALERT;
};

export type TAlertActions = TShowAlert | TRemoveAlert;
