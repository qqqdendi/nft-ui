import React from 'react';

interface GradientLineProps {
  gradient: string;
}

const GradientLine: React.FC<GradientLineProps> = ({ gradient }) => {
  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    width: '1440px',
    height: '11px',
    left: '0px',
    top: '0px',
    background: gradient,
  };

  return <div style={lineStyle}></div>;
};

export default GradientLine;
