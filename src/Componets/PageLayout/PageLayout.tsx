import React, { ReactNode } from 'react';
import Header from '../../Componets/Header/Header';
import GradientLine from '../../uikit/GradientLine/GradientLine';
import { ReactComponent as Icon1 } from '../../Assets/icons/Twitter.svg';
import { ReactComponent as Icon2 } from '../../Assets/icons/Telegram.svg';
import { ReactComponent as Icon3 } from '../../Assets/icons/Discord.svg';
type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const icons: Array<React.ComponentType<React.SVGProps<SVGSVGElement>>> = [Icon1, Icon2, Icon3];
  return <div style={{height:"100vh",}}>
        <GradientLine width='100%' gradient="linear-gradient(90deg, #FFD924 0%, #FF1063 100%)" />
        <div style={{display:"flex",maxWidth:"100%",minHeight:"100%"}}>
        <Header icons={icons}/>
        {children}
        
        </div>
        
    </div>;
};

export default PageLayout;