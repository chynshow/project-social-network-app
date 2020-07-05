import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const TextArea = ({ label, name, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        className="c-text-area"
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextArea;
