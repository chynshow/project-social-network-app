import {
  INIT_SUCCESS,
  INIT_FAIL,
  REGISTRATION_SUCCESS,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAIL,
  REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REMOVE_ACCOUNT_SUCCESS,
  LOG_OUT,
  InitAppSuccessType,
  InitAppFailType,
  FetchAuthSuccessType,
  FetchAuthFailType,
  RegistrationSuccessType,
  RegistrationFailType,
  LoginSuccessType,
  LoginFailType,
  RemoveAccountSuccessType,
  UserType,
  LogOutType,
} from './authTypes';

export const initAppSuccessAC = (): InitAppSuccessType => ({
  type: INIT_SUCCESS,
});
export const initAppFailAC = (): InitAppFailType => ({
  type: INIT_FAIL,
});

export const registrationSuccessAC = (
  token: string
): RegistrationSuccessType => ({
  type: REGISTRATION_SUCCESS,
  payload: { token },
});

export const registrationFailAC = (): RegistrationFailType => ({
  type: REGISTRATION_FAIL,
});

export const loginSuccessAC = (token: string): LoginSuccessType => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailAC = (): LoginFailType => ({
  type: LOGIN_FAIL,
});

export const getAuthSuccesstAC = (user: UserType): FetchAuthSuccessType => ({
  type: FETCH_AUTH_SUCCESS,
  payload: user,
});

export const getAuthtFailAC = (): FetchAuthFailType => ({
  type: FETCH_AUTH_FAIL,
});

export const logOutAC = (): LogOutType => ({ type: LOG_OUT });

export const removeAccountSuccessAC = (): RemoveAccountSuccessType => ({
  type: REMOVE_ACCOUNT_SUCCESS,
});
