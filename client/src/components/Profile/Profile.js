import React from 'react';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';
import Contacts from './Contacts/Contacts';

const Profile = () => {
  return (
    <div className="c-profile">
      <div className="l-profile">
        <Avatar />
        <Contacts />
      </div>
      <Info />
    </div>
  );
};

export default Profile;
