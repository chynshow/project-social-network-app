import { SHOW_ALERT, HIDE_ALERT, AlertActions } from './alertTypes';

const initialState = {
  msg: '' as string,
  styles: '' as string,
};

export default (state = initialState, action: AlertActions): InitialState => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        styles: action.payload.styles,
      };
    case HIDE_ALERT:
      return { ...state, msg: '', styles: '' };
    default:
      return state;
  }
};

type InitialState = typeof initialState;
