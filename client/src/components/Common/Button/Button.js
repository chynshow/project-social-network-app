import React from "react";

const Button = ({ text, handleOnClick, children }) => {
  return (
    <button className="c-btn" onClick={handleOnClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
