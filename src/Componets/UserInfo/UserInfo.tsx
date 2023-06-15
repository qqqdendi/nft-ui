import React from 'react'
import styles from "./styles.module.scss"
import TransactionCard from '../../uikit/TransactionCard/TransactionCard'
import CopyBlock from '../../uikit/CopyBlock/CopyBlock'
import Typography from '../../uikit/Typography/Typography'
import Avatar from '../../uikit/Avatar/Avatar'

export interface UserInfoTypes{
    total:number;
    link:string
}
const UserInfo:React.FC<UserInfoTypes> = ({total,link}) => {
  const transactions = [{
    count:0.0045,
    txId:"0xcdd1....fa66c9a"
  },
  {
    count:0.0045,
    txId:"0xcdd1....fa66c9a"
  },
  {
    count:0.0045,
    txId:"0xcdd1....fa66c9a"
  },
  {
    count:0.0045,
    txId:"0xcdd1....fa66c9a"
  }]
  return (
    <div className={styles.wrapper}>
        <div className={styles.avatarSection}>
            <Avatar/>
        </div>
        <div className={styles.textSection}>
        <div >
            <Typography
              tag="h3"
              fontSize="11px"
              color="#FFFFFF"
              lineHeight="11px"
              fontWeight={400}
            >
            You total amount
        </Typography>
            </div>
            <div style={{marginTop:"20px"}}>
            <Typography
              tag="h3"
              fontSize="24px"
              color="#FFFFFF"
              lineHeight="29px"
              fontWeight={700}
            >
              ${total}
        </Typography>
            </div>
         
        </div>
        <div className={styles.section}>
        <Typography
              tag="h3"
              fontSize="10px"
              color="#FFFFFF"
              lineHeight="10px"
              fontWeight={400}
            >
              Partner link
        </Typography>
            <CopyBlock text={link}/>
        </div>
        <div className={styles.transactions}>
        <p style={{marginLeft:"35px"}}>
        <Typography
              tag="h3"
              fontSize="10px"
              color="#FFFFFF"
              lineHeight="10px"
              fontWeight={400}
            >
              You last transactions
        </Typography>
        </p>
       

        {transactions.map((item)=>(
            <TransactionCard count={item.count} txId={item.txId}/>
        ))}
        </div>
      
    </div>
  )
}

export default UserInfo