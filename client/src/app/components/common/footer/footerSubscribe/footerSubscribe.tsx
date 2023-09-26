import styles from "./footerSubscribe.module.scss";
const FooterSubscribe = (): JSX.Element => {
  return (
    <div className={styles.footer__subscribe}>
      <div className={styles.footer__subscribe__logo}>
        <img src="/img/logo/Logo.png" alt="logo" />
      </div>
      <h2 className={styles.footer__subscribe__title}>
        Подпишитесь на E-mail рассылку
      </h2>
      <p className={styles.footer__subscribe__description}>
        Если хотиет быть в курсе последних новостей и новинок кино - заполните
        форму ниже и оформите бесплатную E-mail рассылку!
      </p>
      <div className={styles.footer__subscribe__email}>
        <input type="text" placeholder="Введите свой E-mail адрес" />{" "}
        <button>Подписаться</button>
      </div>
      <div>
        <input type="checkbox" />{" "}
        <span>
          Соглашаюсь на условия <span>политики конфиденциальности</span>
        </span>
      </div>
    </div>
  );
};

export default FooterSubscribe;
