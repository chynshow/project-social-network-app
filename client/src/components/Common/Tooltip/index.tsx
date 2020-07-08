import React from 'react';

interface TooltipPropTypes {
  label: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipPropTypes> = ({ label, children }) => (
  <span className="c-tooltip">
    <span className="c-tooltip__label">{label}</span>
    {children}
  </span>
);

export default Tooltip;
