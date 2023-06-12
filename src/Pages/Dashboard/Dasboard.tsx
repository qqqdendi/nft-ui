import React from 'react'
import PageLayout from '../../Componets/PageLayout/PageLayout'
import MintComponent from '../../Componets/MintComponent/MintComponent'
import StatsComponent from '../../Componets/StatsComponent/StatsComponent'
import SoonCard from '../../Componets/SoonCard/SoonCard'
import styles from "./styles.module.scss"



const Dasboard = () => {
    const stats = {
      referalLvl: 4,
      referalProcent: 5,
      referalCount: 1345,
      referalPayout: 0.572,
    };
  
    return (
      <PageLayout>
        <div className={styles.wrapper}>
          <MintComponent />
          <div className={styles.cardPart}>
            <StatsComponent
              referalLvl={stats.referalLvl}
              referalProcent={stats.referalProcent}
              referalCount={stats.referalCount}
              referalPayout={stats.referalPayout}
            />
            <SoonCard />    
          </div>
        </div>
      </PageLayout>
    );
  };
  
  
  

export default Dasboard     