import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Typography from '../Typography/Typography';
import { ReactComponent as CopyBtn } from '../../Assets/icons/Vector.svg';

export interface CopyTypes {
  text: string;
}

const CopyBlock: React.FC<CopyTypes> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Скрываем уведомление через 2 секунды
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Typography
        tag="h3"
        fontSize="11px"
        color="#FFFFFF"
        lineHeight="13px"
        fontWeight={400}
      >
        {text}
      </Typography>
      <a className={styles.copyBtn} onClick={copyToClipboard}>
        <CopyBtn />
      </a>
      {isCopied && (
        <div className={styles.notification}>
          Text copied!
        </div>
      )}
    </div>
  );
}

export default CopyBlock;
