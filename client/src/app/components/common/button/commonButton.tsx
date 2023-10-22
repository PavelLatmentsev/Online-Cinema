import styles from './commonButton.module.scss';
import { IButtonProps } from './commonButton.props';
const CommonButton = ({
  children,
  background,
  border,
  color,
}: IButtonProps) => {
  return (
    <button
      style={{ background: background, border: border, color: color }}
      className={styles.commonButton}
    >
      {children}
    </button>
  );
};

export default CommonButton;
