import React, { ReactEventHandler } from 'react';

const Overlay: React.FC<TOverlayProps> = ({
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

type TOverlayProps = {
  opacity: number;
  background: string;
  zIndex: number;
  onClick: ReactEventHandler;
};
