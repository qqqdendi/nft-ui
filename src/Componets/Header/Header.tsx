import React, {  FC } from 'react';
import styles from "./styles.module.scss"
import Icon1  from '../../Assets/icons/Twitter.svg';
import Icon2 from '../../Assets/icons/Discord.svg';

import Icon3  from '../../Assets/icons/Telegram.svg';



interface HeaderProps {
  icons: Array<React.ComponentType<React.SVGProps<SVGSVGElement>>>;
}

const Header: FC<HeaderProps> = ({ icons }) => {
  const handleClick = (index: number): void => {
  };

  return (
    <div className={styles.wrapper}>
      <div style={{marginTop:"10px"}}>
      <img src={Icon1} alt="" />
      </div>
      <div style={{marginTop:"20px"}}>
      <img src={Icon3} alt="" />

      </div>
      <div style={{marginTop:"20px"}}>
      <img src={Icon2} alt="" />

      </div>


    </div>
  );
};

export default Header;
