import React,{useState} from "react";
import styles from "./styles.module.scss";
import Typography from "../../uikit/Typography/Typography";
import Card from "../../uikit/Card/Card";
import { ReactComponent as InfoBtn } from '../../Assets/icons/info.svg';
import Modal from "../../uikit/Modal/Modal";

export interface StatsComponentTypes {
  referalLvl: number;
  referalProcent: number;
  referalCount: number;
  referalPayout: number;
}
const StatsComponent: React.FC<StatsComponentTypes> = ({
  referalLvl,
  referalProcent,
  referalCount,
  referalPayout,
}) => {
  const cardStyles: React.CSSProperties = {
    width: "100%",
    minHeight: " calc(100% * 230 / 900)    ",
    height:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 50px",
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const rowStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "10px",
  };
  const openModal = ()=>{
    setIsOpen(true)
  }
  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <div className={styles.wrapper}>
      <Card customStyles={cardStyles}>
        <div style={rowStyles}>
          <div>
            <Typography
              tag="h3"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              You referal LVL
            </Typography>
            <div style={{margin:"20px 0px"}} >
            <Typography
              tag="h1"
              fontSize="32px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              {referalLvl}
            </Typography>

            


            </div>
          </div>
          <div >
            <Typography
              tag="h3"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              Refelal percent
            </Typography>
            <div style={{margin:"20px 0px"}} >
            <Typography
              tag="h1"
              fontSize="32px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              {referalProcent} %
            </Typography>
            </div>
           
          </div>
        </div>
        <div style={{
          width:"100%",
          background:"linear-gradient(90deg, #FFD924 0%, #FF1063 100%) ",
          height:"4px",
        }}>
        </div>  
        <div style={rowStyles}>
          <div>
            <Typography
              tag="h3"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              Referal count
            </Typography>
            <Typography
              tag="h1"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              {referalCount}
            </Typography>
          </div>
          <div>
            <Typography
              tag="h3"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              Referal payout
            </Typography>
            <Typography
              tag="h1"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
              fontWeight={400}
            >
              {referalPayout} ETH
            </Typography>
          </div>
        </div>
        <p onClick={openModal} className={styles.infoBtn}>
          <InfoBtn onClick={openModal} />
          <Modal isOpen={isOpen} onClose={closeModal}>
          <h4>Рыба</h4>
        </Modal>
        </p>
      </Card>
    </div>
  );
};

export default StatsComponent;
