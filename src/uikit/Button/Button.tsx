import { height } from '@mui/system';
import React, {ReactNode} from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode | string;
  gradient: string,
  borderRadius:string,
  width: string,
  height: string
  margin: string 
}

const Button: React.FC<ButtonProps> = ({ onClick, children, gradient , borderRadius, width,height, margin}) => {
  const buttonStyle: React.CSSProperties = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '16px',
    color: '#FFFFFF',
    background: gradient,
    borderRadius: borderRadius,
    width: width,
    height: height,
    margin:margin,
    cursor:"pointer"
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
