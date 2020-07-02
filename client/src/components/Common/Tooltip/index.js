import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ label, children }) => (
  <span className="c-tooltip">
    <span className="c-tooltip__label">{label}</span>
    {children}
  </span>
);

Tooltip.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
