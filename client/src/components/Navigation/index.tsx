import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUser,
  faCogs,
  faSignOutAlt,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { AppState } from './../../redux';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAC } from './../../redux/auth/authActionCreators';

const switchComponent = (key: string): React.ReactElement => {
  switch (key) {
    case '/registration':
      return (
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/registration"
        >
          Registration
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink>
      );

    default:
      return (
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/login"
        >
          Login
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink>
      );
  }
};

const Navigation: React.FC<{}> = () => {
  const { isAuth } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

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
        {!isAuth ? (
          switchComponent(pathname)
        ) : (
          <button
            className="c-btn c-link c-main-navigation__link"
            onClick={() => dispatch(logOutAC())}
          >
            Logout
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
