import React from 'react';

const Tooltip: React.FC<TTooltipProps> = ({ label, children }) => (
  <span className="c-tooltip">
    <span className="c-tooltip__label">{label}</span>
    {children}
  </span>
);

export default Tooltip;

type TTooltipProps = {
  label: string;
};
