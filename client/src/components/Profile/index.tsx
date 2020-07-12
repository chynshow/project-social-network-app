import React from 'react';
import UserAvatar from '../Common/UserAvatar';
import UserInfo, { UserInfoHeader } from './UserInfo';
import UserContacts from './UserContacts';
import Posts from '../Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileRequest } from './../../redux/profile/profileActions';
import { clearProfileAC } from '../../redux/profile/profileActionCreators';
import { AppState } from '../../redux';
import Loader from '../Common/Loader';

const Profile: React.FC<{}> = () => {
  const [showContent, setShowContent] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProfileRequest());

    return () => {
      dispatch(clearProfileAC());
    };
  }, []);

  const { profile } = useSelector((state: AppState) => state.profile);

  return (
    <section className="c-profile">
      {profile === null ? (
        <Loader />
      ) : (
        <div className="c-profile__user-info-container">
          <div className="l-profile">
            <UserAvatar size="15rem" src={profile?.photo} alt="User Avatar" />
            <UserContacts />
          </div>

          <UserInfoHeader
            setShowContent={setShowContent}
            showContent={showContent}
          />
          <UserInfo showContent={showContent} />
        </div>
      )}
      <Posts />
    </section>
  );
};

export default Profile;