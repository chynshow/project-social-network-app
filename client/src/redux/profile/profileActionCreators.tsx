import {
  getProfileSuccess,
  getProfileFail,
  getProfilesSuccess,
  getProfilesFail,
  updateProfileSuccess,
  updatePhotoSuccess,
  clearProfile,
  clearPhoto,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  UPDATE_PROFILE,
  UPDATE_PHOTO,
  CLEAR_PROFILE,
  CLEAR_PHOTO,
  UserProfile,
} from './profileTypes';

export const getProfileSuccessAC = (
  profile: UserProfile
): getProfileSuccess => ({ type: GET_PROFILE_SUCCESS, payload: profile });

export const getProfileFailAC = (): getProfileFail => ({
  type: GET_PROFILE_FAIL,
});

export const getProfilesSuccessAC = (
  profiles: Array<UserProfile>
): getProfilesSuccess => ({ type: GET_PROFILES_SUCCESS, payload: profiles });

export const getProfilesFailAC = (): getProfilesFail => ({
  type: GET_PROFILES_FAIL,
});

export const updateProfileSuccessAC = (
  profile: UserProfile
): updateProfileSuccess => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const updatePhotoSuccessAC = (photo: string): updatePhotoSuccess => ({
  type: UPDATE_PHOTO,
  payload: photo,
});

export const clearProfileAC = (): clearProfile => ({ type: CLEAR_PROFILE });

export const clearPhotoAC = (): clearPhoto => ({ type: CLEAR_PHOTO });
