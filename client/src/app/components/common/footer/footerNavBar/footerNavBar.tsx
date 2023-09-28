import styles from "./footerNavBar.module.scss";
import NavBar from "../../navBar/navBar";
import { Link } from "react-router-dom";
const FooterNavBar = () => {
  return (
    <div className={styles.footer__navigate}>
      <div className={styles.footer__navigate__logo}>
        <img src="/img/icons/icons-social-footer.svg" alt="social" />
      </div>
      <div className={styles.footer__navigate__bar}>
        <NavBar />
      </div>

      <p className={styles.footer__navigate__license}>2023 © Kinoarea. Все права защищены</p>
      <Link to={"404"} className={styles.footer__navigate__confedence}>Политика конфиденциальности</Link>
    </div>
  );
};

export default FooterNavBar;
