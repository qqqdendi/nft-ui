import React, {  FC } from 'react';
import IconButton from '../../uikit/IconBtn/IconBtn';
import styles from "./styles.module.scss"

interface HeaderProps {
  icons: Array<React.ComponentType<React.SVGProps<SVGSVGElement>>>;
}

const Header: FC<HeaderProps> = ({ icons }) => {
  const handleClick = (index: number): void => {
  };

  return (
    <div className={styles.wrapper}>
      {icons.map((Icon, index) => (
        <IconButton
          key={`icon${index}`}
          icon={<Icon />}
          onClick={() => handleClick(index)}
          disabled={false}
        />
      ))}
    </div>
  );
};

export default Header;
