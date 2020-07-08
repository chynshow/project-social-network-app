import React from 'react';

const Header: React.FC<{}> = () => {
  return (
    <header className="c-main-header">
      <h2 className="c-title-secondary c-main-header__title">
        <span className="c-main-header__title--mode">Social</span>
        <span className="c-main-header__title--mode">Network</span>
      </h2>
    </header>
  );
};

export default Header;
