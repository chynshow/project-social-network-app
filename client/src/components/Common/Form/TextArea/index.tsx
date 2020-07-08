import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

interface PropTypes {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  type: string;
}

const TextArea: React.FC<PropTypes> = ({
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
        as="textarea"
        id={name}
        name={name}
        className={className ? `c-text-area ${className}` : 'c-text-area'}
        type={type}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
