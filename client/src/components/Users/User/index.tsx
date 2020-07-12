import React from 'react';
import UserAvatar from '../../Common/UserAvatar';

export interface User {
  name: string;
  avatar: string;
}

const User: React.FC<User> = ({ name, avatar }) => {
  return (
    <div className="c-user">
      <UserAvatar src={avatar} size="5rem" alt="Avatar" />
      <div className="l-user">
        <h3 className="c-user__user-name">{name}</h3>
        <span className="c-user__user-profession">Designer</span>
      </div>
    </div>
  );
};

export default User;
