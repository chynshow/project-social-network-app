import React from 'react';
import UserAvatar from './UserAvatar';
import UserInfo, { UserInfoHeader } from './UserInfo';
import UserContacts from './UserContacts';
import Posts from '../Posts/Posts';

const Profile = () => {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div className="c-profile">
      <div className="c-profile__user-info-area">
        <div className="l-profile">
          <UserAvatar />
          <UserContacts />
        </div>
        <UserInfoHeader
          setShowContent={setShowContent}
          showContent={showContent}
        />
        {showContent && <UserInfo />}
      </div>
      {!showContent && <Posts />}
    </div>
  );
};

export default Profile;
