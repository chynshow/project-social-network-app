import { TProfileResponse } from './profileActions';
import { TGetPosts } from '../posts/postsActionCreators';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const GET_PROFILE_BY_ID_SUCCESS = 'GET_PROFILE_BY_ID_SUCCESS';
export const GET_PROFILE_BY_ID_FAIL = 'GET_PROFILE_BY_ID_FAIL';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const CLEAR_PROFILES = 'CLEAR_PROFILES';
export const CLEAR_PHOTO = 'CLEAR_PHOTO';

export const getProfileSuccessAC = (
  profile: TProfileResponse
): TGetProfileSuccess => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailAC = (): TGetProfileFail => ({
  type: GET_PROFILE_FAIL,
});

export const getProfileByIdSuccessAC = (
  profile: TProfileResponse
): TGetProfileByIdSuccess => ({
  type: GET_PROFILE_BY_ID_SUCCESS,
  payload: profile,
});

export const getProfileByIdFailAC = (): TGetProfileByIdFail => ({
  type: GET_PROFILE_BY_ID_FAIL,
});

export const getProfilesSuccessAC = (
  profiles: Array<TProfileResponse>
): TGetProfilesSuccess => ({ type: GET_PROFILES_SUCCESS, payload: profiles });

export const getProfilesFailAC = (): TGetProfilesFail => ({
  type: GET_PROFILES_FAIL,
});

export const updateProfileSuccessAC = (
  profile: TProfileResponse
): TUpdateProfileSuccess => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const updatePhotoSuccessAC = (photo: string): TUpdatePhotoSuccess => ({
  type: UPDATE_PHOTO,
  payload: photo,
});

export const clearProfileAC = (): TClearProfile => ({ type: CLEAR_PROFILE });

export const clearProfilesAC = (): TClearProfiles => ({ type: CLEAR_PROFILES });

export const clearPhotoAC = (): TClearPhoto => ({ type: CLEAR_PHOTO });

export type TGetProfileSuccess = {
  type: typeof GET_PROFILE_SUCCESS;
  payload: TProfileResponse;
};

export type TGetProfileFail = {
  type: typeof GET_PROFILE_FAIL;
};

export type TGetProfileByIdSuccess = {
  type: typeof GET_PROFILE_BY_ID_SUCCESS;
  payload: TProfileResponse;
};

export type TGetProfileByIdFail = {
  type: typeof GET_PROFILE_BY_ID_FAIL;
};

export type TGetProfilesSuccess = {
  type: typeof GET_PROFILES_SUCCESS;
  payload: Array<TProfileResponse>;
};

export type TGetProfilesFail = {
  type: typeof GET_PROFILES_FAIL;
};

export type TUpdateProfileSuccess = {
  type: typeof UPDATE_PROFILE;
  payload: TProfileResponse;
};

export type TUpdatePhotoSuccess = {
  type: typeof UPDATE_PHOTO;
  payload: string;
};

export type TClearProfile = {
  type: typeof CLEAR_PROFILE;
};

export type TClearProfiles = {
  type: typeof CLEAR_PROFILES;
};

export type TClearPhoto = {
  type: typeof CLEAR_PHOTO;
};

export type TProfileActions =
  | TGetProfileSuccess
  | TGetProfileFail
  | TGetProfileByIdSuccess
  | TGetProfileByIdFail
  | TGetProfilesSuccess
  | TGetProfilesFail
  | TUpdateProfileSuccess
  | TUpdatePhotoSuccess
  | TClearProfile
  | TClearPhoto
  | TClearProfiles
  | TGetPosts;
