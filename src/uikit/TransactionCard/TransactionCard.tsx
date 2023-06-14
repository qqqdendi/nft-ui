import React from 'react'
import styles from "./styles.module.scss"
import Typography from '../Typography/Typography'

export interface TransactionType{
    count:number,
    txId: string
}
const TransactionCard:React.FC<TransactionType> = ({count,txId}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.countBlock}>
            <Typography tag='h3' fontSize='12px' color='#FFFFFF' lineHeight='15px' fontWeight={400}>
            {count} <br />
             ETH
            </Typography> 
        
        </div>
        <div className={styles.txBlock}>
            <Typography tag='h3' fontSize='8px' color='#FFFFFF' lineHeight='15px' fontWeight={400}>
             TxID
            </Typography> 
            <Typography tag='h3' fontSize='12px' color='#FFFFFF' lineHeight='15px' fontWeight={600}>
            {txId}
            </Typography> 
           
        </div>
    </div>
  )
}

export default TransactionCard