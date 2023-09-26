import styles from "./footer.module.scss";
import FooterNavBar from "./footerNavBar/footerNavBar";
import FooterSubscribe from "./footerSubscribe/footerSubscribe";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footer}>
          <FooterSubscribe />
          <FooterNavBar />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
