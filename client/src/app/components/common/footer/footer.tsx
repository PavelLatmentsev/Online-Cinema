import styles from "./footer.module.scss";

const Footer = ():JSX.Element => {
    return ( 
        <footer>
          <div className={styles.container}>
            <div className={styles.footer}>
            <div className={styles.footer__subscribe}>
                <div>
                    <img src="../../../../../public/img/logo/Logo.png" alt="logo" />
                </div>
                <h2>Подпишитесь на E-mail рассылку</h2>
                <p>Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и оформите бесплатную E-mail рассылку!</p>
                <div>
                    <input type="text" placeholder="Введите свой E-mail адрес" /> <button>Подписаться</button>
                </div>
                <div><input type="chekbox" /> <span>Соглашаюсь на условия <span>политики конфиденциальности</span></span></div>
            </div>
            <div className={styles.footer__navigate}>
                
            </div>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer