import {
  initAppSuccessAC,
  initAppFailAC,
  removeAccountSuccessAC,
  loginSuccessAC,
  loginFailAC,
  getAuthSuccesstAC,
  getAuthtFailAC,
  registrationSuccessAC,
  registrationFailAC,
} from './authActionCreators';
import { showAlert } from './../alert/alertActions';
import { TAuthActions } from './authActionCreators';
import { Dispatch } from 'react';
import { instance } from './../../utils/axiosUtils';
import { BaseThunk } from './../';

export const initApp = () => (
  dispatch: Dispatch<TAuthActions | BaseThunk<TAuthActions>>
) => {
  try {
    Promise.all([dispatch(getAuthRequest())]).then(() => {
      dispatch(initAppSuccessAC());
    });
  } catch (error) {
    dispatch(initAppFailAC());
    showAlert('Initialization fail!', 'danger');
  }
};

export const registrationRequest = (
  name: string,
  email: string,
  password: string
): BaseThunk<TAuthActions> => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await instance.post<TAuthResponse>(
      '/api/v1/auth/register',
      body
    );
    dispatch(registrationSuccessAC(res.data.token));
    dispatch(getAuthRequest());
  } catch (error) {
    dispatch(registrationFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const loginRequest = (
  email: string,
  password: string
): BaseThunk<TAuthActions> => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await instance.post<TAuthResponse>('/api/v1/auth/login', body);
    dispatch(loginSuccessAC(res.data.token));
    dispatch(getAuthRequest());
  } catch (error) {
    dispatch(loginFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getAuthRequest = (): BaseThunk<TAuthActions> => async (
  dispatch
) => {
  if (localStorage.token) {
    instance.defaults.headers.authorization =
      'Bearer ' + localStorage.getItem('token');
  }
  try {
    const res = await instance.get<TUserResponse>('/api/v1/auth/me');
    dispatch(getAuthSuccesstAC(res.data));
  } catch (error) {
    dispatch(getAuthtFailAC());
    throw error.response.data.error;
  }
};

export const removeAccountRequest = (): BaseThunk<TAuthActions> => async (
  dispatch
) => {
  try {
    await instance.delete<Promise<void>>('/api/v1/auth');
    dispatch(removeAccountSuccessAC());
    dispatch(showAlert('Account was deleted!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

type TAuthResponse = {
  token: string;
};

export type TUserResponse = {
  _id: string;
  email: string;
  createdAt: Date;
};
