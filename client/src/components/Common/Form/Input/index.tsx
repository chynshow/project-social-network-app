import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Input: React.FC<TInputProps> = ({
  label,
  name,
  className,
  type,
  ...rest
}) => {
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
        type={type}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;

type TInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  type: string;
};
