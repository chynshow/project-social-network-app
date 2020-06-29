import React from "react";
import Icon from "../Common/Icon/Icon";
import {
  faUsers,
  faUser,
  faCogs,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="c-main-navigation">
      <NavLink
        activeClassName="c-main-navigation__link--active"
        className="c-link c-main-navigation__link"
        to="/profile"
      >
        Profile
        <Icon icon={faUser} />
      </NavLink>
      <NavLink
        activeClassName="c-main-navigation__link--active"
        className="c-link c-main-navigation__link"
        to="/users"
      >
        Users
        <Icon icon={faUsers} />
      </NavLink>
      {/* <NavLink
        activeClassName="c-main-navigation__link--active"
        className="c-link c-main-navigation__link"
        to="/posts"
      >
        Messages
        <Icon icon={faCommentAlt} />
      </NavLink> */}
      <NavLink
        activeClassName="c-main-navigation__link--active"
        className="c-link c-main-navigation__link"
        to="/settings"
      >
        Settings
        <Icon icon={faCogs} />
      </NavLink>
    </ul>
  );
};

export default Navigation;
