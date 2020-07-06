import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUser,
  faCogs,
  faSignOutAlt,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className="c-main-navigation">
      <ul className="c-main-navigation__links-container">
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/profile"
        >
          Profile
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/users"
        >
          Users
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/messages"
        >
          Messages
          <FontAwesomeIcon icon={faComments} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/settings"
        >
          Settings
          <FontAwesomeIcon icon={faCogs} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/login"
        >
          Login
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
