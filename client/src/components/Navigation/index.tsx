import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUser,
  faCogs,
  faSignOutAlt,
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
          <span className="c-main-navigation__link-text">Registration</span>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink>
      );

    default:
      return (
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/"
        >
          <span className="c-main-navigation__link-text">Login</span>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </NavLink>
      );
  }
};

const Navigation: React.FC<{}> = () => {
  const { isAuth } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation<{ pathName: string }>();

  return (
    <div className="c-main-navigation">
      <ul className="c-main-navigation__links-container">
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/profile"
        >
          <span className="c-main-navigation__link-text">Profile</span>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/users"
        >
          <span className="c-main-navigation__link-text">Users</span>
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink
          activeClassName="c-main-navigation__link--active"
          className="c-link c-main-navigation__link"
          to="/settings"
        >
          <span className="c-main-navigation__link-text">Settings</span>
          <FontAwesomeIcon icon={faCogs} />
        </NavLink>

        {!isAuth ? (
          switchComponent(pathname)
        ) : (
          <button
            className="c-btn c-link c-main-navigation__link"
            onClick={() => dispatch(logOutAC())}
          >
            <span className="c-main-navigation__link-text">Logout</span>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
