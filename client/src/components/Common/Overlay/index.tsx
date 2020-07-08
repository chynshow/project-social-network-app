import React, { ReactEventHandler } from 'react';

interface PropTypes {
  opacity: number;
  background: string;
  zIndex: number;
  onClick: ReactEventHandler;
}

const Overlay: React.FC<PropTypes> = ({
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
