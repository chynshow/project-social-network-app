// Reducer
export type InitialStateType = {
  initialization: boolean;
  loading: boolean;
};

// Action creators
export type InitAppSuccessType = {
  type: 'INIT_SUCCESS';
};

export type InitAppFailType = {
  type: 'INIT_FAIL';
};

export type RegistrationSuccessType = {
  type: 'REGISTRATION_SUCCESS';
  payload: {
    token: string;
  };
};

export type RegistrationFailType = {
  type: 'REGISTRATION_FAIL';
  payload: {
    msg: string;
  };
};

export type LoginSuccessType = {
  type: 'LOGIN_SUCCESS';
  payload: {
    token: string;
  };
};

export type LoginFailType = {
  type: 'LOGIN_FAIL';
  payload: {
    msg: string;
  };
};

export type FetchAuthSuccessType = {
  type: 'FETCH_AUTH_SUCCESS';
  payload: {
    token: string;
  };
};

export type FetchAuthFailType = {
  type: 'FETCH_AUTH_FAIL';
  payload: {
    msg: string;
  };
};

export type RemoveAccountSuccessType = {
  type: 'REMOVE_ACCOUNT_SUCCESS';
  payload: {
    msg: string;
  };
};

export type RemoveAccountFailType = {
  type: 'REMOVE_ACCOUNT_FAIL';
  payload: {
    msg: string;
  };
};
