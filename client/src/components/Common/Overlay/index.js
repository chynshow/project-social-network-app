import React from 'react';

const Overlay = ({ opacity = '.5', background, zIndex, ...rest }) => (
  <div
    className="c-overlay"
    style={{ opacity, background, zIndex }}
    {...rest}
  />
);

export default Overlay;
