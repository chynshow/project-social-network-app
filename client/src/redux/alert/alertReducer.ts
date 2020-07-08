import {
  SHOW_ALERT,
  HIDE_ALERT,
  AlertActionTypes,
  InitialStateType,
} from './alertTypes';

const initialState: InitialStateType = {
  msg: '',
  styles: null,
};
export default (
  state = initialState,
  action: AlertActionTypes
): InitialStateType => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        styles: action.payload.styles,
      };
    case HIDE_ALERT:
      return { ...state, msg: '', styles: null };
    default:
      return state;
  }
};
