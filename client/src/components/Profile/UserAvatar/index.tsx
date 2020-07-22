import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../redux';
import { updatePhotoRequest } from './../../../redux/profile/profileActions';
import { useParams } from 'react-router-dom';

const UserAvatar: React.FC<{}> = () => {
  const { profile } = useSelector((state: AppState) => state.profile);

  const { userId } = useParams<{ userId: string }>();

  const dispatch = useDispatch();

  const changeAvatar = (e: any) => {
    if (e.target.files.length) {
      dispatch(updatePhotoRequest(e.target.files[0]));
    }
  };

  return (
    <div className="c-user-avatar">
      <label
        className={
          !userId ? 'c-user-avatar__label--active' : 'c-user-avatar__label'
        }
      >
        <img
          src={`data:image/jpeg;base64,${profile?.photo}`}
          alt="User"
          className="c-user-avatar__img c-profile__user-avatar"
        />
        {!userId && (
          <input
            className="c-user-avatar__input"
            type="file"
            onChange={changeAvatar}
          />
        )}
      </label>
    </div>
  );
};

export default UserAvatar;
