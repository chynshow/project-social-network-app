import React from 'react';

const Loader: React.FC<{}> = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'red',
      }}
    >
      LOADING!!!!
    </div>
  );
};

export default Loader;
