import React from "react";
import styles from "./styles.module.scss";
import Typography from "../../uikit/Typography/Typography";
import Card from "../../uikit/Card/Card";
import GradientLine from "../../uikit/GradientLine/GradientLine";

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
    height: "calc(100% * 230 / 900)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
  };

  const rowStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "10px",
  };

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
            >
              You referal LVL
            </Typography>
            <div style={{margin:"20px 0px"}} >
            <Typography
              tag="h1"
              fontSize="32px"
              color="#FFFFFF"
              lineHeight="15px"
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
            >
              Refelal percent
            </Typography>
            <div style={{margin:"20px 0px"}} >
            <Typography
              tag="h1"
              fontSize="32px"
              color="#FFFFFF"
              lineHeight="15px"
            >
              {referalProcent} %
            </Typography>
            </div>
           
          </div>
        </div>
        <GradientLine
          gradient="linear-gradient(90deg, #FFD924 0%, #FF1063 100%);"
          width="100%"
        />
        <div style={rowStyles}>
          <div>
            <Typography
              tag="h3"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
            >
              Referal count
            </Typography>
            <Typography
              tag="h1"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
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
            >
              Referal payout
            </Typography>
            <Typography
              tag="h1"
              fontSize="12px"
              color="#FFFFFF"
              lineHeight="15px"
            >
              {referalPayout} ETH
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsComponent;
