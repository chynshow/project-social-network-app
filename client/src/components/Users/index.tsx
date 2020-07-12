import React from 'react';
import User from './User';
import { getProfilesRequest } from './../../redux/profile/profileActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux';
import Loader from '../Common/Loader';

export interface UserT {
  _id: string;
  name: string;
  avatar: string;
}

const Users: React.FC<{}> = (): JSX.Element => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfilesRequest());
  }, []);

  const { profiles, loading } = useSelector((state: AppState) => state.profile);

  return (
    <section className="c-users">
      {loading && !profiles ? (
        <Loader />
      ) : (
        <div className="c-users__items-container">
          {/* {profiles.map((user: UserT) => (
            <User key={user._id} name={user.name} avatar={user.avatar} />
          ))} */}
        </div>
      )}
    </section>
  );
};

export default Users;
