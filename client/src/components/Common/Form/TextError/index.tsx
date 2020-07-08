import React from 'react';

interface PropTypes {
  children?: React.ReactNode;
}

const TextError: React.FC<PropTypes> = ({ children }) => (
  <div className="c-text-error">{children}</div>
);

export default TextError;
