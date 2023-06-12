import React, { CSSProperties, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
 
  customStyles?: CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, customStyles }) => {
  const cardStyle: CSSProperties = {
    
  
    background: '#110F1D',
    borderRadius: '0px',
    ...customStyles,
  };



  return (
    <div style={cardStyle}>
        {children}
    </div>
  );
};

export default Card;
