import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Icon = ({ icon }) => {
  return (
    <div className="l-icon">
      <FontAwesomeIcon className="c-icon" icon={icon} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default Icon;
