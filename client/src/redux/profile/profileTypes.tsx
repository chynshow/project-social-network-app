import { ThunkAction } from 'redux-thunk';
import { AppState } from './../index';

export interface UserProfile {
  name: string;
  user: {
    email: string;
    createdAt: string;
  };
  mainInfo: {
    aboutMe: string;
    location: string | null;
    status: string | null;
    skills: string | null;
    languages: string | null;
  };
  contacts: {
    github: string | null;
    phone: string | null;
    linkedin: string | null;
  };
  photo: string;
  createdAt: string;
}

export interface GetProfileResponse {
  profile: {
    name: string;
    _id: string;
    user: {
      email: string;
      createdAt: string;
    };
    mainInfo: {
      aboutMe: string;
      location: string | null;
      status: string | null;
      skills: string | null;
      languages: string | null;
    };
    contacts: {
      github: string | null;
      phone: string | null;
      linkedin: string | null;
    };
    photo: string;
    createdAt: string;
  };
}

export interface UpdateProfile {
  name: string;
  profession: string;
  position: string;
  about: string;
  location: string;
  skills: string;
  languages: string;
}

export interface UpdateProfileResponse {
  profile: {
    contacts: any;
    createdAt: string;
    mainInfo: any;
    name: string;
    photo: string;
    user: any;
    _id: string;
  };
  posts: Array<UserProfile> | null;
}

export type UsersProfiles = Array<UserProfile>;

export interface InitialState {
  profile: null | UserProfile;
  profiles: UsersProfiles | [];
  loading: boolean;
}

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';
export const UPDATE_PROFILE_SUCESS = 'UPDATE_PROFILE_SUCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';
export const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';
export const UPDATE_PHOTO_FAIL = 'UPDATE_PHOTO_FAIL';
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
  payload: UsersProfiles;
}

export interface getProfilesFail {
  type: typeof GET_PROFILES_FAIL;
}

export interface updateProfileSuccess {
  type: typeof UPDATE_PROFILE_SUCESS;
  payload: UserProfile;
}

export interface updateProfileFail {
  type: typeof UPDATE_PROFILE_FAIL;
}

export interface updatePhotoSuccess {
  type: typeof UPDATE_PHOTO_SUCCESS;
  payload: string;
}

export interface updatePhotoFail {
  type: typeof UPDATE_PHOTO_FAIL;
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
  | updateProfileFail
  | updatePhotoSuccess
  | updatePhotoFail
  | clearProfile
  | clearPhoto;

export type Thunk = ThunkAction<
  Promise<void>,
  AppState,
  unknown,
  ProfileActions
>;
