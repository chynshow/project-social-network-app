import {
  Thunk,
  GetProfileResponse,
  UpdateProfile,
  UpdateProfileResponse,
} from './profileTypes';
import {
  getProfileSuccessAC,
  getProfileFailAC,
  getProfilesFailAC,
  getProfilesSuccessAC,
  updateProfileSuccessAC,
  updatePhotoFailAC,
} from './profileActionCreators';
import { showAlert } from '../alert/alertActions';
import { instance } from './../../utils/axiosUtils';

export const getProfileRequest = (): Thunk => async (dispatch) => {
  try {
    const res = await instance.get<GetProfileResponse>('/api/v1/profile');
    dispatch(getProfileSuccessAC(res.data.profile));
  } catch (error) {
    dispatch(getProfileFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};

export const getProfilesRequest = (): Thunk => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/profile/all');
    dispatch(getProfilesSuccessAC(res.data.profiles));
    console.log(res.data.profiles);
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
    console.log(res.data);

    dispatch(updateProfileSuccessAC(res.data.profile));
    dispatch(showAlert('Update personal info!', 'success'));
  } catch (error) {
    dispatch(updatePhotoFailAC());
    dispatch(showAlert(error.response.data.error, 'danger'));
  }
};
export const updatePhotoRequest = (): Thunk => async (dispatch) => {};
