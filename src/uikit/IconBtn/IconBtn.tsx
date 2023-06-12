import React, { ReactNode } from 'react';

type IconButtonProps = {
  icon: ReactNode | string ;
  onClick?: () => void; 
  disabled?: boolean; 
};

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        borderRadius: '4px',
        background: 'none',
        border: 'none',
        outline: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {icon}
    </button>
  );
};

export default IconButton;
