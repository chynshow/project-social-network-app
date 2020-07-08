import React, { ReactEventHandler } from 'react';

interface OverlayPropTypes {
  opacity: number;
  background: string;
  zIndex: number;
  onClick: ReactEventHandler;
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
