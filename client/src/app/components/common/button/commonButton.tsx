import styles from "./commonButton.module.scss";
import { IButtonProps } from "./commonButton.props";
const CommonButton = ({children, background}: IButtonProps) => {

    return (
        <button style={{background:background}} className={styles.commonButton}>{children}</button>
      );
}
 
export default CommonButton;