import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Input = ({ label, name, placeholder, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} placeholder={placeholder} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
