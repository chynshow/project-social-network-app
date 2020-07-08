import React from 'react';

interface OverlayPropTypes {
  opacity: number;
  background: string;
  zIndex: number;
}

const Overlay: React.FC<OverlayPropTypes> = ({
  opacity,
  background,
  zIndex,
  ...rest
}) => (
  <div
    className="c-overlay"
    style={{ opacity, background, zIndex }}
    {...rest}
  />
);

export default Overlay;
