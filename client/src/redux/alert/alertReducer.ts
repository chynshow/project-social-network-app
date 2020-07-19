import { SHOW_ALERT, HIDE_ALERT, TAlertActions } from './alertActionCreators';

const initialState = {
  msg: '' as string,
  styles: '' as string,
};

export default (state = initialState, action: TAlertActions): TInitialState => {
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

type TInitialState = typeof initialState;
