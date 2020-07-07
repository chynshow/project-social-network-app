// Actions

export type ShowAlertType = {
  type: 'SHOW_ALERT';
  payload: {
    msg: string;
    styles: string;
  };
};

export type RemoveAlertType = {
  type: 'REMOVE_ALERT';
};

// Reducer
export type InitialStateType = {
  msg: string;
  styles: string | null;
};
