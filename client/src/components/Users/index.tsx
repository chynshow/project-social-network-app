import React from 'react';
import User from './User';
import {
  getProfilesRequest,
  TProfileResponse,
} from './../../redux/profile/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';
import Loader from '../Common/Loader';

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
          {(profiles as Array<TProfileResponse>).map(
            (user: TProfileResponse) => (
              <User
                key={user._id}
                name={user.name}
                photo={user.photo}
                profession={user.profession}
                position={user.position}
                userId={user.user._id}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

export default Users;
