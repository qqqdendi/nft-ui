import React,{useState} from 'react'
import styles from "./styles.module.scss"
import Typography from '../Typography/Typography'
import Modal from '../Modal/Modal'

export interface nftCardTypes {
    nftSale:string, 
    mounth:number,
    priceChange:number,
    price:number,
}


const NftCard:React.FC<nftCardTypes> = ({nftSale,mounth,priceChange,price}) => {
 const [open,setOpen] = useState(false);
 const close = ()=>{
    setOpen(!open)
 }
 const openModal = ()=>{
    setOpen(true)
 }
  return (
    <div className={styles.wrapper}>
        <div className={styles.contentBlock}>
        <div  style={{padding:"10px 0"}} >
         <Typography fontWeight={800} tag="h3"  fontSize='14px' color='#FFFFFF' lineHeight='17px'>
             NFT Safe: {nftSale}
         </Typography>
        </div>
        <div style={{padding:"15px 0"}}>
        <Typography fontWeight={400} tag="h3"  fontSize='14px' color='#FFFFFF' lineHeight='17px'>
            Lock moutns:  <span style={{
                fontFamily:"'Inter'",
                fontSize:"24px",
                fontWeight:"800",

            }}>{mounth}</span> 
        </Typography>
        </div>
        <div style={{padding:"15px 0"}} >
        <Typography  fontWeight={400} tag="h3"  fontSize='14px' color='#FFFFFF' lineHeight='17px'>
            Change price:  <span style={{
                fontFamily:"'Inter'",
                fontSize:"24px",
                fontWeight:"800",

            }}>{priceChange}%</span> 
           
        </Typography>
        </div>
       
        </div>
       
        <div className={styles.gradientBlock} onClick={openModal}>
        <Typography fontWeight={1000} tag="h1"  fontSize='14px' color='#FFFFFF' lineHeight='17px'>
        <Modal onClose={close} isOpen={open}>
                <h1 style={{color:"#000"}}>Рыба </h1>
            </Modal>
        <span >${price}</span> 
        </Typography>
        </div>
    </div>
  )
}

export default NftCard