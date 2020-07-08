import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

interface PropTypes {
  control: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

const FormControl: React.FC<PropTypes> = ({ control, name, type, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input type={type} name={name} {...rest} />;
    case 'textarea':
      return <TextArea type={type} name={name} {...rest} />;

    default:
      return null;
  }
};

export default FormControl;
