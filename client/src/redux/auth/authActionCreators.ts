import { TUserResponse } from './authActions';

export const INIT_SUCCESS = 'INIT_SUCCESS';
export const INIT_FAIL = 'INIT_FAIL';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAIL = 'FETCH_AUTH_FAIL';
export const LOG_OUT = 'LOG_OUT';
export const REMOVE_ACCOUNT_SUCCESS = 'REMOVE_ACCOUNT_SUCCESS';

export const initAppSuccessAC = (): TInitAppSuccess => ({
  type: INIT_SUCCESS,
});
export const initAppFailAC = (): TInitAppFail => ({
  type: INIT_FAIL,
});

export const registrationSuccessAC = (token: string): TRegistrationSuccess => ({
  type: REGISTRATION_SUCCESS,
  payload: { token },
});

export const registrationFailAC = (): TRegistrationFail => ({
  type: REGISTRATION_FAIL,
});

export const loginSuccessAC = (token: string): TLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailAC = (): TLoginFail => ({
  type: LOGIN_FAIL,
});

export const getAuthSuccesstAC = (user: TUserResponse): TFetchAuthSuccess => ({
  type: FETCH_AUTH_SUCCESS,
  payload: user,
});

export const getAuthtFailAC = (): TFetchAuthFail => ({
  type: FETCH_AUTH_FAIL,
});

export const logOutAC = (): TLogOut => ({ type: LOG_OUT });

export const removeAccountSuccessAC = (): TRemoveAccountSuccess => ({
  type: REMOVE_ACCOUNT_SUCCESS,
});

export type TInitAppSuccess = {
  type: typeof INIT_SUCCESS;
};

export type TInitAppFail = {
  type: typeof INIT_FAIL;
};

export type TRegistrationSuccess = {
  type: typeof REGISTRATION_SUCCESS;
  payload: {
    token: string;
  };
};

export type TRegistrationFail = {
  type: typeof REGISTRATION_FAIL;
};

export type TLoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
};

export type TLoginFail = {
  type: typeof LOGIN_FAIL;
};

export type TFetchAuthSuccess = {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: TUserResponse;
};

export type TFetchAuthFail = {
  type: typeof FETCH_AUTH_FAIL;
};

export type TLogOut = {
  type: typeof LOG_OUT;
};

export type TRemoveAccountSuccess = {
  type: typeof REMOVE_ACCOUNT_SUCCESS;
};

export type TAuthActions =
  | TInitAppSuccess
  | TInitAppFail
  | TRegistrationSuccess
  | TRegistrationFail
  | TLoginSuccess
  | TLoginFail
  | TFetchAuthSuccess
  | TFetchAuthFail
  | TRemoveAccountSuccess
  | TLogOut;
