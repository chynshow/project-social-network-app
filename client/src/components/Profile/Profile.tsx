import React from 'react';
import UserAvatar from '../Common/UserAvatar';
import UserInfo, { UserInfoHeader } from './UserInfo';
import UserContacts from './UserContacts';
import Posts from '../Posts';

const Profile: React.FC<{}> = () => {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div className="c-profile">
      <div className="c-profile__user-info-container">
        <div className="l-profile">
          <UserAvatar
            size="15rem"
            src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
            alt="User Avatar"
          />
          <UserContacts />
        </div>
        <UserInfoHeader
          setShowContent={setShowContent}
          showContent={showContent}
        />
        <UserInfo showContent={showContent} />
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
