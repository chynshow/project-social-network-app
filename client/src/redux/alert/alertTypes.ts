export interface InitialStateType {
  msg: string;
  styles: string | null;
}

export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export interface ShowAlertType {
  type: typeof SHOW_ALERT;
  payload: {
    msg: string;
    styles: string;
  };
}

export interface RemoveAlertType {
  type: typeof HIDE_ALERT;
}

export type AlertActionTypes = ShowAlertType | RemoveAlertType;
