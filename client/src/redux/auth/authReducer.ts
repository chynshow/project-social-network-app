import { InitialStateType } from './auth.types';
import { INIT_SUCCESS, INIT_FAIL } from './authTypes';

const initialState: InitialStateType = {
  initialization: false,
  loading: true,
};

export default (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INIT_SUCCESS:
      return { ...state, initialization: true, loading: false };
    case INIT_FAIL:
      return { ...state, initialization: false, loading: false };
    default:
      return state;
  }
};
