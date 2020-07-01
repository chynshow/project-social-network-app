import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ className = '', placeholder = '' }) => {
  return (
    <textarea
      className={`c-text-area ${className}`}
      placeholder={placeholder}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
};

export default TextArea;
