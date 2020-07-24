import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  UPDATE_PROFILE,
  UPDATE_PHOTO,
  CLEAR_PROFILE,
  CLEAR_PHOTO,
  GET_PROFILE_BY_ID_SUCCESS,
  GET_PROFILE_BY_ID_FAIL,
  CLEAR_PROFILES,
} from './profileActionCreators';

import { TProfileResponse } from './profileActions';
import { TProfileActions } from './profileActionCreators';

const initialState = {
  profile: null as null | TProfileResponse,
  profiles: [] as [] | Array<TProfileResponse>,
  loading: true,
};

export default (
  state = initialState,
  action: TProfileActions
): TInitialState => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE:
    case GET_PROFILE_BY_ID_SUCCESS:
      return { ...state, loading: false, profile: action.payload };
    case GET_PROFILE_FAIL:
    case GET_PROFILE_BY_ID_FAIL:
    case CLEAR_PROFILE:
      return { ...state, loading: false, profile: null };
    case CLEAR_PROFILES:
      return { ...state, loading: false, profiles: [] };
    case GET_PROFILES_SUCCESS:
      return { ...state, loading: false, profiles: action.payload };
    case GET_PROFILES_FAIL:
      return { ...state, loading: false, profiles: [] };
    case UPDATE_PHOTO:
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          photo: action.payload,
        } as TProfileResponse,
      };
    case CLEAR_PHOTO:
      return {
        ...state,
        loading: true,
        profile: { ...state.profile, photo: null } as TProfileResponse,
      };
    default:
      return state;
  }
};

type TInitialState = typeof initialState;
