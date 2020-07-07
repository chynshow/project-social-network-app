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
  REMOVE_ACCOUNT_FAIL,
} from './authTypes';
import {
  InitAppSuccessType,
  InitAppFailType,
  FetchAuthSuccessType,
  FetchAuthFailType,
  RegistrationSuccessType,
  RegistrationFailType,
  LoginSuccessType,
  LoginFailType,
  RemoveAccountSuccessType,
  RemoveAccountFailType,
} from './auth.types';

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

export const registrationFailAC = (msg: string): RegistrationFailType => ({
  type: REGISTRATION_FAIL,
  payload: {
    msg,
  },
});

export const loginSuccessAC = (token: string): LoginSuccessType => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailAC = (msg: string): LoginFailType => ({
  type: LOGIN_FAIL,
  payload: { msg },
});

export const getAuthSuccesstAC = (token: string): FetchAuthSuccessType => ({
  type: FETCH_AUTH_SUCCESS,
  payload: {
    token,
  },
});

export const getAuthtFailAC = (msg: string): FetchAuthFailType => ({
  type: FETCH_AUTH_FAIL,
  payload: {
    msg,
  },
});

export const removeAccountSuccessAC = (
  msg: string
): RemoveAccountSuccessType => ({
  type: REMOVE_ACCOUNT_SUCCESS,
  payload: { msg },
});

export const removeAccountFailAC = (msg: string): RemoveAccountFailType => ({
  type: REMOVE_ACCOUNT_FAIL,
  payload: { msg },
});
