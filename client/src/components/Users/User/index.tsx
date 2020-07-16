import React from 'react';
import UserAvatar from '../../Common/UserAvatar';
import { Link } from 'react-router-dom';

export interface User {
  name: string;
  photo: string | null;
  position: string;
  profession: string;
  userId?: string;
}

const User: React.FC<User> = ({
  name,
  photo,
  position,
  profession,
  userId,
}) => {
  return (
    <Link to={`/profile/${userId}`} className="c-user">
      <UserAvatar src={photo} size="5rem" alt="Avatar" />
      <div className="l-user">
        <h3 className="c-user__user-name">{name}</h3>
        {profession && (
          <span className="c-user__user-profession">
            {position}&nbsp;{profession}
          </span>
        )}
      </div>
    </Link>
  );
};

export default User;
