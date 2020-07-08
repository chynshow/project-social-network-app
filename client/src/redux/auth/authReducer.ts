import {
  INIT_SUCCESS,
  INIT_FAIL,
  InitialStateType,
  AuthActionTypes,
} from './authTypes';

const initialState: InitialStateType = {
  isInit: false,
  isAuth: false,
  token: null,
  user: null,
  loading: true,
};

export default (
  state = initialState,
  action: AuthActionTypes
): InitialStateType => {
  switch (action.type) {
    case INIT_SUCCESS:
      return { ...state, isAuth: true, loading: false };
    case INIT_FAIL:
      return { ...state, isAuth: false, loading: false };
    default:
      return state;
  }
};
