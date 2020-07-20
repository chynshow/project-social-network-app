import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

const FormControl: React.FC<TFormControlProps> = ({
  control,
  name,
  type,
  ...rest
}) => {
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

type TFormControlProps = {
  control: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  className?: string;
};
