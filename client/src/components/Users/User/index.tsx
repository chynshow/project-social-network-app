import React from 'react';
import { Link } from 'react-router-dom';

export type TUser = {
  name: string;
  photo: string | null;
  position: string | null;
  profession: string | null;
  userId: string;
};

const User: React.FC<TUser> = ({
  name,
  photo,
  position,
  profession,
  userId,
}) => {
  return (
    <Link to={`/profile/${userId}`} className="c-link c-user">
      <div className="c-user-avatar">
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt="User"
          className="c-user-avatar__img c-user__photo"
        />
      </div>
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
