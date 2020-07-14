import {
  InitialState,
  ProfileActions,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  UPDATE_PROFILE,
  UPDATE_PHOTO,
  CLEAR_PROFILE,
  CLEAR_PHOTO,
} from './profileTypes';

const initialState: InitialState = {
  profile: null,
  profiles: [],
  loading: true,
};

export default (state = initialState, action: ProfileActions): InitialState => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE:
      return { ...state, loading: false, profile: action.payload };
    case GET_PROFILE_FAIL:
    case CLEAR_PROFILE:
      return { ...state, loading: false, profile: null };
    case GET_PROFILES_SUCCESS:
      return { ...state, loading: false, profiles: action.payload };
    case GET_PROFILES_FAIL:
      return { ...state, loading: false, profiles: [] };
    case UPDATE_PHOTO:
      return {
        ...state,
        loading: false,
        profile: { ...state.profile, photo: action.payload },
      };
    case CLEAR_PHOTO:
      return {
        ...state,
        loading: false,
        profile: { ...state.profile, photo: null },
      };
    default:
      return state;
  }
};
