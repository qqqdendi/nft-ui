import React from "react";
import Typography from "../../uikit/Typography/Typography";
import Button from "../../uikit/Button/Button";
import styles from "./styles.module.scss";

interface ContentProps {
  text: string;
}

const MainPageContent: React.FC<ContentProps> = ({ text }) => {
  const formattedText = (
    <p
     
    >
      <span style={{ marginLeft:"30px" }}>FIRST YOU <span style={{fontWeight:"1000"}} >NFT </span> </span>  <br />{" "}
      FOR SAFE YOU BTC
    </p>
  );
  return (
    <div className={styles.wrapper}>
      <div>
        <Typography
          tag="h1"
          fontSize="font-size: 48px;"
          children={formattedText}
          color={"#FFFFFF"}
          lineHeight={"58px"}
          fontWeight={400}
        />
        <Button
          onClick={() => {}}
          width={"180px"}
          height={"40px"}
          borderRadius="10px"
          gradient="linear-gradient(90deg, #E773EE 0%, #FF8838 100%)"
          margin="0 60px"
          fontSize={13}
        >
          Wallet connect
        </Button>
      </div>
    </div>
  );
};

export default MainPageContent;
