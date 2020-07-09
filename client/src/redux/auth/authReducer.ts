import {
  INIT_SUCCESS,
  INIT_FAIL,
  InitialStateType,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAIL,
  LOG_OUT,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  REMOVE_ACCOUNT_SUCCESS,
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
      return { ...state, isInit: true, loading: false };
    case INIT_FAIL:
      return { ...state, isInit: false, loading: false };
    case LOGIN_SUCCESS:
    case REGISTRATION_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return { ...state, loading: false, token: action.payload.token };
    case LOGIN_FAIL:
    case REGISTRATION_FAIL:
      return { ...state, loading: false, token: null };
    case FETCH_AUTH_SUCCESS:
      return { ...state, loading: false, isAuth: true, user: action.payload };
    case FETCH_AUTH_FAIL:
    case LOG_OUT:
    case REMOVE_ACCOUNT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuth: false,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
