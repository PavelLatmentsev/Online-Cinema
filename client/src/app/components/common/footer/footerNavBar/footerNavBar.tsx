import styles from "./footerNavBar.module.scss";
import NavBar from "../../navBar/navBar";
const FooterNavBar = () => {
  return (
    <div className={styles.footer__navigate}>
      <div>
        <img src="/img/icons/icons-social-footer.svg" alt="social" />
      </div>
      <div className={styles.footer__navigate__bar}>
        <NavBar />
      </div>

      <p>2020 © Kinoarea. Все права защищены</p>
      <p>Политика конфиденциальности</p>
    </div>
  );
};

export default FooterNavBar;
