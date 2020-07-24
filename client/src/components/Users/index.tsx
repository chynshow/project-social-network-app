import React from 'react';
import User from './User';
import { getProfilesRequest } from './../../redux/profile/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';
import Loader from '../Common/Loader';
import { clearProfilesAC } from '../../redux/profile/profileActionCreators';

const Users: React.FC<{}> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfilesRequest());

    return () => {
      dispatch(clearProfilesAC());
    };
  }, []);

  const { profiles, loading } = useSelector((state: AppState) => state.profile);

  const ownerId = useSelector((state: AppState) => state.auth.user?._id);

  return (
    <section className="c-users">
      {loading || !profiles.length ? (
        <Loader />
      ) : (
        <div className="c-users__items-container">
          {(profiles as Array<TUser>)
            .filter((user: TUser) => user.user !== ownerId)
            .map((user: TUser) => (
              <User
                key={user._id}
                name={user.name}
                photo={user.photo}
                profession={user.profession}
                position={user.position}
                userId={user.user}
              />
            ))}
        </div>
      )}
    </section>
  );
};

export default Users;

type TUser = {
  name: string;
  about: string | null;
  profession: string | null;
  position: string | null;
  location: string | null;
  skills: string | null;
  languages: string | null;
  photo: string | null;
  _id: string;
  user: string;
  createdAt: Date;
};
