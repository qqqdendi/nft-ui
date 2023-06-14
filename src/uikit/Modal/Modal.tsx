import React, { useState, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: string | ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div>
      {isOpen && <div className={styles.modalOverlay} onClick={handleOverlayClick} />}
      <div className={`${styles.modalContent} ${isOpen ? styles.modalOpen : ''}`}>
        <button className={styles.closeButton} onClick={handleCloseClick}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
