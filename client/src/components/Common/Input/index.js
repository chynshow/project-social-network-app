import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  placeholder,
  label,
  onChange,
  className,
  type,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={`c-input ${className}`}
        id={name}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  className: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
