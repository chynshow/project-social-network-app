import { ThunkAction } from 'redux-thunk';
import { AppState } from './../index';

export interface UserProfile {
  name: string;
  user: { email: string; createdAt: string };
  about: string;
  profession: string;
  position: string;
  location: string;
  skills: string;
  languages: string;
  contacts: {
    github: string | null;
    phone: string | null;
    linkedin: string | null;
  };
  photo: string | null;
}

export interface GetProfileResponse extends UserProfile {
  _id: string;
}

export interface UpdateProfileResponse {
  profile: UserProfile;
  posts: [];
}

export interface GetProfilesResponse {
  profiles: Array<UserProfile>;
}

export interface UpdateProfile {
  name?: string;
  profession?: string;
  position?: string;
  about?: string;
  location?: string;
  skills?: string;
  languages?: string;
}

export interface InitialState {
  profile: any | null | UserProfile;
  profiles: Array<UserProfile> | [];
  loading: boolean;
}

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const CLEAR_PHOTO = 'CLEAR_PHOTO';

export interface getProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  payload: UserProfile;
}

export interface getProfileFail {
  type: typeof GET_PROFILE_FAIL;
}

export interface getProfilesSuccess {
  type: typeof GET_PROFILES_SUCCESS;
  payload: Array<UserProfile>;
}

export interface getProfilesFail {
  type: typeof GET_PROFILES_FAIL;
}

export interface updateProfileSuccess {
  type: typeof UPDATE_PROFILE;
  payload: UserProfile;
}

export interface updatePhotoSuccess {
  type: typeof UPDATE_PHOTO;
  payload: string;
}

export interface clearProfile {
  type: typeof CLEAR_PROFILE;
}

export interface clearPhoto {
  type: typeof CLEAR_PHOTO;
}

export type ProfileActions =
  | getProfileSuccess
  | getProfileFail
  | getProfilesSuccess
  | getProfilesFail
  | updateProfileSuccess
  | updatePhotoSuccess
  | clearProfile
  | clearPhoto;

export type Thunk = ThunkAction<
  Promise<void>,
  AppState,
  unknown,
  ProfileActions
>;
