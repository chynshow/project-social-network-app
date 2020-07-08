import React from 'react';

interface TextError {
  children?: React.ReactNode;
}

const TextError: React.FC<TextError> = ({ children }) => (
  <div className="c-text-error">{children}</div>
);

export default TextError;
