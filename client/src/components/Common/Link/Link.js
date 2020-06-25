import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ path, text, children }) => {
  return (
    <NavLink
      to={path}
      exact
      className="c-link"
      activeClassName="c-link--active"
    >
      {text}
      {children}
    </NavLink>
  );
};

export default Link;
