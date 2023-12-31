import PageLayout from "../../Componets/PageLayout/PageLayout";
import MintComponent from "../../Componets/MintComponent/MintComponent";
import StatsComponent from "../../Componets/StatsComponent/StatsComponent";
import SoonCard from "../../Componets/SoonCard/SoonCard";
import styles from "./styles.module.scss";
import NftCard from "../../uikit/nftCard/nftCard";
import UserInfo from "../../Componets/UserInfo/UserInfo";
import Typography from "../../uikit/Typography/Typography";

const Dasboard = () => {
  const stats = {
    referalLvl: 4,
    referalProcent: 5,
    referalCount: 1345,
    referalPayout: 0.572,
  };
  const nfts = [
    {
      nftSale: "0.1",
      mounth: 5,
      priceChange: 65,
      price: 13000,
    },
    {
      nftSale: "0.1",
      mounth: 5,
      priceChange: 65,
      price: 13000,
    },
    {
      nftSale: "0.1",
      mounth: 5,
      priceChange: 65,
      price: 13000,
    },
  ];
  const userInfo = {
    total:13.030,
    link:"https://safebtc.pro/?link=4877314"
  }
  return (
    <PageLayout>
      <div className={styles.wrapper}>
        <div className={styles.firstPart}>
          <div className={styles.contentBlock}>
            <MintComponent />
            <div className={styles.cardPart}>
              <div className={styles.row}>
                <StatsComponent
                  referalLvl={stats.referalLvl}
                  referalProcent={stats.referalProcent}
                  referalCount={stats.referalCount}
                  referalPayout={stats.referalPayout}
                />
                <div
                  style={{
                    width: "100%",
                    margin: "20px 0px",
                    height: "100%",
                  }}
                >
                  <SoonCard />
                </div>
              </div>
              <div
                style={{
                  marginLeft: "125px",
                  width: "100%",
                  height: "100%",
                }}
                className={styles.row}
              >
                <SoonCard />
                <div
                  style={{
                    marginTop: "20px",
                    height: "100%",
                  }}
                >
                  <SoonCard />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.historyBlock}>
          <Typography
              tag="h1"
              fontSize="14px"
              color="#FFFFFF"
              lineHeight="17px"
              fontWeight={400}
            >
             My NFT list:
            </Typography>
            <div className={styles.flexBox}>
            
            {nfts.map((item) => (
              
              <NftCard
                nftSale={item.nftSale}
                mounth={item.mounth}
                priceChange={item.priceChange}
                price={item.price}
              />
            ))}
            </div>
           
          </div>
        </div>
        <div className={styles.secondPart}>
          <UserInfo  link={userInfo.link} total={userInfo.total}/>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dasboard;
