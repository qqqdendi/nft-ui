import React from "react";
import Card from "../../uikit/Card/Card";
import styles from "./styles.module.scss";
import Typography from "../../uikit/Typography/Typography";
import Button from "../../uikit/Button/Button";

const MintComponent = () => {
  const cardStyles: React.CSSProperties = {
    width: "30%",
    margin: "40px 20px",
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding:"20px"
  };

  return (
    <Card customStyles={cardStyles}>
      <div style={containerStyles}>
        <Typography
          tag="h1"
          fontSize="48px"
          fontType="Inter"
          color="#FFFFFF"
          lineHeight="58px"
        >
          <p>
            <span style={{ fontSize: "20px" }}>Mint you first</span>
            <br />
            <span style={{ fontSize: "26px" }}>NFTSAFE</span>
          </p>
        </Typography>
        <Typography
          tag="h3"
          fontSize="36px"
          fontType="Inter"
          color="#FFFFFF"
          lineHeight="38px"
        >
          <p>
            <span style={{ fontSize: "46px" }}>49</span> <br />
            USDT
          </p>
        </Typography>
        <div style={{ width: "70%" }}>
          <input
            type="text"
            style={{
              width: "100%",
              height: "33px",
              background: "#070510",
              borderRadius: "10px",
              outline: "none",
              color: "#ffffff",
              padding: "4px 0",
            }}
            placeholder="Price change"
          />
          <input
            type="text"
            style={{
              width: "100%",
              height: "33px",
              background: "#070510",
              borderRadius: "10px",
              outline: "none",
              color: "#ffffff",
              padding: "4px 0",
            }}
            placeholder="Lock mounts"
          />
          <Button
            onClick={() => {}}
            width="100%"
            height="39px"
            borderRadius="10px"
            gradient="linear-gradient(90deg, #E773EE 0%, #FF8838 100%)"
            margin="30px 0"
          >
           Mint
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MintComponent;
