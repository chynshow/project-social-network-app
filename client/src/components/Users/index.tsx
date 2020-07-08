import React from 'react';
import User from './User';

const Users: React.FC<{}> = (): JSX.Element => {
  return (
    <section className="c-users">
      <div className="c-users__items-container">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </section>
  );
};

export default Users;
