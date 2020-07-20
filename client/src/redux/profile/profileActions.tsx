import {
  getProfileSuccessAC,
  getProfileFailAC,
  getProfilesFailAC,
  getProfilesSuccessAC,
  updateProfileSuccessAC,
  updatePhotoSuccessAC,
  clearPhotoAC,
  getProfileByIdSuccessAC,
  getProfileByIdFailAC,
  TProfileActions,
} from './profileActionCreators';
import { showAlert } from '../alert/alertActions';
import { instance } from './../../utils/axiosUtils';
import { getPostsAC, TPost } from '../posts/postsActionCreators';
import { BaseThunk } from './../';
import { getPostsRequest } from '../posts/postsActions';
import { TUpdateProfileValues } from '../../components/Profile/ModalAddUserInfo';

export const getProfileRequest = (): BaseThunk<TProfileActions> => async (
  dispatch
) => {
  try {
    const res = await instance.get<TProfileResponse>('/api/v1/profile');
    dispatch(getProfileSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfileFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getProfileByIdRequest = (
  userId: string
): BaseThunk<TProfileActions> => async (dispatch) => {
  try {
    const res = await instance.get<TProfileResponse>(
      `/api/v1/profile/${userId}`
    );
    dispatch(getProfileByIdSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfileByIdFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getProfilesRequest = (): BaseThunk<TProfileActions> => async (
  dispatch
) => {
  try {
    const res = await instance.get<Array<TProfileResponse>>(
      '/api/v1/profile/all'
    );
    dispatch(getProfilesSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfilesFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateProfileRequest = (
  profile: TUpdateProfileValues
): BaseThunk<TProfileActions> => async (dispatch) => {
  const body = JSON.stringify({ profile });
  try {
    const res = await instance.post<TProfileResponse>(
      '/api/v1/profile/update',
      body
    );
    dispatch(updateProfileSuccessAC(res.data));
    dispatch(getPostsRequest());
    dispatch(showAlert('Update personal info!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updatePhotoRequest = (
  photo: string
): BaseThunk<TProfileActions> => async (dispatch) => {
  const formData = new FormData();
  formData.append('file', photo);
  try {
    const res = await instance.put<TUpdatePhotoResponse>(
      '/api/v1/profile/photo',
      formData
    );
    dispatch(clearPhotoAC());
    dispatch(updatePhotoSuccessAC(res.data.photo));
    dispatch(getPostsAC(res.data.posts));
    dispatch(showAlert('Photo chnaged!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export type TProfileResponse = {
  name: string;
  about: string | null;
  profession: string | null;
  position: string | null;
  location: string | null;
  skills: string | null;
  languages: string | null;
  photo: string | null;
  _id: string;
  user: TProfileUser;
  createdAt: Date;
};

type TProfileUser = {
  email: string;
  createdAt: Date;
  _id: string;
};

type TUpdatePhotoResponse = {
  photo: string;
  posts: Array<TPost>;
};

export type TProfilesResponce = Array<TProfileResponse>;
