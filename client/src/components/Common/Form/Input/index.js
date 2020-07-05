import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Input = ({ label, name, placeholder, className, ...rest }) => {
  return (
    <div className="c-form__field-container">
      {label && (
        <label className="c-form__field-label" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        className={className ? `c-input ${className}` : 'c-input'}
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
