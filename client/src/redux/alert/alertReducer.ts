import { SHOW_ALERT, REMOVE_ALERT } from './alertTypes';
import { InitialStateType } from './alert.types';

const initialState: InitialStateType = {
  msg: '',
  styles: null,
};
export default (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        styles: action.payload.styles,
      };
    case REMOVE_ALERT:
      return { ...state, msg: '', styles: null };
    default:
      return state;
  }
};
