import styles from "./styles.module.scss"
import Typography from "../../uikit/Typography/Typography"

const SoonCard = () => {
  return (
    <div className={styles.wrapper}>
        <Typography tag="h2" fontSize="12px" color="#FFFFFF" lineHeight="15px">
             Coming soon
        </Typography>
    </div>
  )
}

export default SoonCard