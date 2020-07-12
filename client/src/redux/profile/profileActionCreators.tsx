import {
  getProfileSuccess,
  getProfileFail,
  getProfilesSuccess,
  getProfilesFail,
  updateProfileSuccess,
  updateProfileFail,
  updatePhotoSuccess,
  updatePhotoFail,
  clearProfile,
  clearPhoto,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_FAIL,
  UPDATE_PROFILE_SUCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_FAIL,
  CLEAR_PROFILE,
  CLEAR_PHOTO,
  UserProfile,
  UsersProfiles,
} from './profileTypes';

export const getProfileSuccessAC = (
  profile: UserProfile
): getProfileSuccess => ({ type: GET_PROFILE_SUCCESS, payload: profile });

export const getProfileFailAC = (): getProfileFail => ({
  type: GET_PROFILE_FAIL,
});

export const getProfilesSuccessAC = (
  profiles: UsersProfiles
): getProfilesSuccess => ({ type: GET_PROFILES_SUCCESS, payload: profiles });

export const getProfilesFailAC = (): getProfilesFail => ({
  type: GET_PROFILES_FAIL,
});

export const updateProfileSuccessAC = (
  profile: UserProfile
): updateProfileSuccess => ({
  type: UPDATE_PROFILE_SUCESS,
  payload: profile,
});

export const updateProfileFailAC = (): updateProfileFail => ({
  type: UPDATE_PROFILE_FAIL,
});

export const updatePhotoSuccessAC = (photo: string): updatePhotoSuccess => ({
  type: UPDATE_PHOTO_SUCCESS,
  payload: photo,
});

export const updatePhotoFailAC = (): updatePhotoFail => ({
  type: UPDATE_PHOTO_FAIL,
});

export const clearProfileAC = (): clearProfile => ({ type: CLEAR_PROFILE });

export const clearPhotoAC = (): clearPhoto => ({ type: CLEAR_PHOTO });
