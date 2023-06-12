import React from 'react';

interface GradientLineProps {
  gradient: string;
  width:string;
}

const GradientLine: React.FC<GradientLineProps> = ({ gradient,width }) => {
  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    width: width,
    height: '11px',
    left: '0px',
    top: '0px',
    background: gradient,
  };

  return <div style={lineStyle}></div>;
};

export default GradientLine;
