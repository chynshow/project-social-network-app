import React from 'react';
import User from './User';
import { getProfilesRequest } from './../../redux/profile/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';
import Loader from '../Common/Loader';
import { UserProfile } from './../../redux/profile/profileTypes';

const Users: React.FC<{}> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfilesRequest());
  }, []);

  const { profiles, loading } = useSelector((state: AppState) => state.profile);

  return (
    <section className="c-users">
      {loading || !profiles.length ? (
        <Loader />
      ) : (
        <div className="c-users__items-container">
          {profiles.map((user: UserProfile) => (
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
