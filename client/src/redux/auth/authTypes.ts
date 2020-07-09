export interface UserType {
  id: string;
  email: string;
  createdAt: string;
}

export interface InitialStateType {
  isInit: boolean;
  isAuth: boolean;
  token: string | null;
  user: null | UserType;
  loading: boolean;
}

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

export interface InitAppSuccessType {
  type: typeof INIT_SUCCESS;
}

export interface InitAppFailType {
  type: typeof INIT_FAIL;
}

export interface RegistrationSuccessType {
  type: typeof REGISTRATION_SUCCESS;
  payload: {
    token: string;
  };
}

export interface RegistrationFailType {
  type: typeof REGISTRATION_FAIL;
}

export interface LoginSuccessType {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}

export interface LoginFailType {
  type: typeof LOGIN_FAIL;
}

export interface FetchAuthSuccessType {
  type: typeof FETCH_AUTH_SUCCESS;
  payload: UserType;
}

export interface FetchAuthFailType {
  type: typeof FETCH_AUTH_FAIL;
}

export interface LogOutType {
  type: typeof LOG_OUT;
}

export interface RemoveAccountSuccessType {
  type: typeof REMOVE_ACCOUNT_SUCCESS;
}

export type AuthActionTypes =
  | InitAppSuccessType
  | InitAppFailType
  | RegistrationSuccessType
  | RegistrationFailType
  | LoginSuccessType
  | LoginFailType
  | FetchAuthSuccessType
  | FetchAuthFailType
  | RemoveAccountSuccessType
  | LogOutType;
