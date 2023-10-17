import { Link } from "react-router-dom";
import CommonButton from "../../common/button/commonButton";
import styles from "./notfoundPage.module.scss"
const NotfoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__error}>404</h1>
      <h2 className={styles.notFound__title}>Кина не будет:( </h2>
      <p className={styles.notFound__description}>
        Возможно, данного адреса страницы не сущетсвует, или странциа была
        перемещена.
      </p >
      <div className={styles.notFound__btn}>
        <Link to="/"> <CommonButton background="#3657CB">Вернуться на главную</CommonButton> </Link> <CommonButton> Поиск по сайту</CommonButton>
      </div>
      
    </div>
  );
};

export default NotfoundPage;
