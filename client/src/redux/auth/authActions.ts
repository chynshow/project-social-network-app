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
import { AuthActionTypes } from './authTypes';
import { AppState } from './../index';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';
import {
  getProfileRequest,
  getProfilesRequest,
} from './../profile/profileActions';
import { instance } from './../../utils/axiosUtils';

export const initApp = () => (
  dispatch: Dispatch<AuthActionTypes | ThunkType>
) => {
  try {
    Promise.all([
      dispatch(getAuthRequest()),
      // dispatch(getProfileRequest()),
      // dispatch(getProfilesRequest()),
    ]).then(() => {
      dispatch(initAppSuccessAC());
    });
  } catch (error) {
    dispatch(initAppFailAC());
    showAlert('Initialization fail!', 'danger');
  }
};

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, AuthActionTypes>;

export const registrationRequest = (
  name: string,
  email: string,
  password: string
): ThunkType => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await instance.post('/api/v1/auth/register', body);
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
): ThunkType => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await instance.post('/api/v1/auth/login', body);
    dispatch(loginSuccessAC(res.data.token));
    dispatch(getAuthRequest());
  } catch (error) {
    dispatch(loginFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getAuthRequest = (): ThunkType => async (dispatch) => {
  if (localStorage.token) {
    instance.defaults.headers.authorization = 'Bearer ' + localStorage.token;
  }
  try {
    const res = await instance.get('/api/v1/auth/me');
    dispatch(getAuthSuccesstAC(res.data.user));
  } catch (error) {
    dispatch(getAuthtFailAC());
    console.error(error.response.data.error);
  }
};

export const removeAccountRequest = (): ThunkType => async (dispatch) => {
  try {
    await instance.delete('/api/v1/auth');
    dispatch(removeAccountSuccessAC());
    dispatch(showAlert('Account was deleted!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};
