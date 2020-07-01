import React from 'react';
import UserAvatar from '../../Common/UserAvatar';

const User = () => {
  return (
    <div className="c-user">
      <UserAvatar
        src="assets/images/stefan-stefancik-QXevDflbl8A-unsplash.jpg"
        size="5rem"
      />
      <div className="l-user">
        <h3 className="c-user__user-name">Jane Williams</h3>
        <span className="c-user__user-profession">Designer</span>
      </div>
    </div>
  );
};

export default User;
