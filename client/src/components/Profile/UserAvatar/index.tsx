import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux';
import { updatePhotoRequest } from './../../../redux/profile/profileActions';

const UserAvatar: React.FC = () => {
  const photo = useSelector((state: AppState) => state.profile.profile?.photo);
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
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          className="c-user-avatar__img c-profile__user-avatar"
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
