import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const TextArea = ({ label, name, placeholder, className, ...rest }) => {
  return (
    <div className="c-form__field-container">
      {label && (
        <label className="c-form__field-label" htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        as="textarea"
        id={name}
        name={name}
        className={className ? `c-text-area ${className}` : 'c-text-area'}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
