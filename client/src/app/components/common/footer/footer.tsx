import NavBar from "../navBar/navBar";
import styles from "./footer.module.scss";

const Footer = ():JSX.Element => {
    return ( 
        <footer>
          <div className={styles.container}>
            <div className={styles.footer}>
            <div className={styles.footer__subscribe}>
                <div className={styles.footer__subscribe__logo}>
                    <img src="../../../../../public/img/logo/Logo.png" alt="logo" />
                </div>
                <h2 className={styles.footer__subscribe__title}>Подпишитесь на E-mail рассылку</h2>
                <p className={styles.footer__subscribe__description}>Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!</p>
                <div className={styles.footer__subscribe__email}>
                    <input type="text" placeholder="Введите свой E-mail адрес" /> <button>Подписаться</button>
                </div>
                <div><input type="checkbox" /> <span>Соглашаюсь на условия <span>политики конфиденциальности</span></span></div>
            </div>
            <div className={styles.footer__navigate}>
                <div>
                  <img src="../../../../../public/img/icons/icons-social-footer.svg" alt="social" />
                </div>
                <div className={styles.footer__navigate__bar}>
                <NavBar/>
                </div>
           
                <p>2020 © Kinoarea. Все права защищены</p>
                <p>Политика конфиденциальности</p>
            </div>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer