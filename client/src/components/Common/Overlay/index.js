import React from 'react';

const Overlay = ({
  opacity = '.2',
  background = '#fff',
  zIndex = '2',
  ...rest
}) => (
  <div
    className="c-overlay"
    style={{ opacity, background, zIndex }}
    {...rest}
  />
);

export default Overlay;
