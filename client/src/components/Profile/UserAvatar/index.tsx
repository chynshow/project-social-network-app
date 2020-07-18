import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux';
import { updatePhotoRequest } from './../../../redux/profile/profileActions';

const UserAvatar = () => {
  const { profile } = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch();
  const changeAvatar = (e: any) => {
    if (e.target.files.length) {
      dispatch(updatePhotoRequest(e.target.files[0]));
    }
  };

  return (
    <div className="c-user-avatar">
      <label className="c-user-avatar__label">
        <img
          src={`data:image/jpeg;base64,${profile?.photo}`}
          alt=""
          className="c-user-avatar__img"
          style={{ width: '15rem' }}
        />
        <input
          className="c-user-avatar__input"
          type="file"
          onChange={changeAvatar}
        />
      </label>
    </div>
  );
};

export default UserAvatar;
