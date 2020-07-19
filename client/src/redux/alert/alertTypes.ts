export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export type ShowAlert = {
  type: typeof SHOW_ALERT;
  payload: {
    msg: string;
    styles: string;
  };
};

export type RemoveAlert = {
  type: typeof HIDE_ALERT;
};

export type AlertActions = ShowAlert | RemoveAlert;
