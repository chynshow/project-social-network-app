import React from 'react';

const Loader: React.FC<{}> = () => {
  return (
    <div className="c-loader__container">
      <div className="c-loader">
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
        <div className="c-loader__dot" />
      </div>
    </div>
  );
};

export default Loader;
