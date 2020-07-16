import {
  Thunk,
  UpdateProfile,
  GetProfileResponse,
  UpdateProfileResponse,
  GetProfilesResponse,
} from './profileTypes';
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
} from './profileActionCreators';
import { showAlert } from '../alert/alertActions';
import { instance } from './../../utils/axiosUtils';

export const getProfileRequest = (): Thunk => async (dispatch) => {
  try {
    const res = await instance.get<GetProfileResponse>('/api/v1/profile');
    dispatch(getProfileSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfileFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getProfileByIdRequest = (userId: string): Thunk => async (
  dispatch
) => {
  try {
    const res = await instance.get<GetProfileResponse>(
      `/api/v1/profile/${userId}`
    );
    dispatch(getProfileByIdSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfileByIdFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getProfilesRequest = (): Thunk => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/profile/all');
    dispatch(getProfilesSuccessAC(res.data));
  } catch (error) {
    dispatch(getProfilesFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updateProfileRequest = (profile: UpdateProfile): Thunk => async (
  dispatch
) => {
  const body = JSON.stringify({ profile });
  try {
    const res = await instance.post<UpdateProfileResponse>(
      '/api/v1/profile/update',
      body
    );
    dispatch(updateProfileSuccessAC(res.data.profile));
    dispatch(showAlert('Update personal info!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const updatePhotoRequest = (photo: string): Thunk => async (
  dispatch
) => {
  const formData = new FormData();
  formData.append('file', photo);
  try {
    const res = await instance.put('/api/v1/profile/photo', formData);
    dispatch(clearPhotoAC());
    dispatch(updatePhotoSuccessAC(res.data.photo));
    dispatch(showAlert('Photo chnaged!', 'success'));
  } catch (error) {
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};
