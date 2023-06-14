import React from "react";
import Card from "../../uikit/Card/Card";
import styles from "./styles.module.scss";
import Typography from "../../uikit/Typography/Typography";
import Button from "../../uikit/Button/Button";

const MintComponent = () => {
  const cardStyles: React.CSSProperties = {
    width: "50%",
    height: "30%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexGrow:"1",
    flexDirection:"column"
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0px",
    gap: "2px", // Добавлено свойство gap для отступов между элементами
  };

  const inputStyles: React.CSSProperties = {
    width: "100%",
    background: "#070510",
    borderRadius: "10px",
    outline: "none",
    color: "#ffffff",
    padding: "8px 12px",
    border:"none",
    margin: "2% 0",
  };

  
  return (
    <Card customStyles={cardStyles}>
      <div style={containerStyles}>
        <Typography
          tag="h1"
          fontSize="26px"
          color="#FFFFFF"
          lineHeight="30px"
          fontWeight={400}
        >
            <span style={{ fontSize: "20px" }}>Mint you first</span>
            <br />
            <span style={{ fontSize: "26px",fontWeight:900 }}>NFT SAFE</span>
        </Typography>
        <Typography
          tag="h3"
          fontSize="26px"
          color="#FFFFFF"
          lineHeight="39px"
          fontWeight={400}
        >
          <p>
            <span style={{ fontSize: "36px", margin: "0 10px" }}>49</span> <br />
            USDT
          </p>
        </Typography>
        <div style={{ width: "70%" }}>
          <input
            type="text"
            style={inputStyles}
            placeholder="Price change"
            className={styles.placeholderWhite}
          />
          <input
            type="text"
            style={inputStyles}
            placeholder="Lock mounts"
            className={styles.placeholderWhite}
          />
          <Button
            onClick={() => {}}
            gradient={"linear-gradient(90deg, #E773EE 0%, #FF8838 100%)"}
            borderRadius={"10px"}
            width={"100%"}
            height={"39px"}
            margin={"40px 10px"}
            fontSize={15}
          >
            Mint
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MintComponent;
