import React from "react";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="c-main-header">
      <h2 className="c-main-header__title">
        <FontAwesomeIcon className="c-main-header__icon" icon={faUserCircle} />
        Social Network
      </h2>
      <div className="c-logout-container">
        <button text="Logout" className="c-btn c-logout-container__btn">
          <FontAwesomeIcon
            className="c-logout-container__icon"
            icon={faSignOutAlt}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
