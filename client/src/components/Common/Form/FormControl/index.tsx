import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

interface FormControlPropTypes {
  control: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const FormControl: React.FC<FormControlPropTypes> = ({
  control,
  name,
  type,
  label,
  placeholder,
  ...rest
}) => {
  switch (control) {
    case 'input':
      return (
        <Input
          type={type}
          label={label}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      );
    case 'textarea':
      return (
        <TextArea
          type={type}
          label={label}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      );

    default:
      return null;
  }
};

export default FormControl;
