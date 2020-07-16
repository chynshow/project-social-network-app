import React from 'react';
import UserAvatar from '../../Common/UserAvatar';

export interface User {
  name: string;
  photo: string | null;
  position: string;
  profession: string;
}

const User: React.FC<User> = ({ name, photo, position, profession }) => {
  return (
    <div className="c-user">
      <UserAvatar src={photo} size="5rem" alt="Avatar" />
      <div className="l-user">
        <h3 className="c-user__user-name">{name}</h3>
        {profession && (
          <span className="c-user__user-profession">
            {position}&nbsp;{profession}
          </span>
        )}
      </div>
    </div>
  );
};

export default User;
