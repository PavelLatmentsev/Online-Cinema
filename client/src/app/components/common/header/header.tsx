import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img src="../../../../../public/img/logo/Logo.png" alt="logo" />
                <img src="../../../../../public/img/logo/icons-social.svg" alt="social" />
            </div>
            <div className={styles.header__navigate}>
                <nav>
                    <ul>
                        <li><Link to="\">Афиша</Link></li>
                        <li><Link to="\">Медиа</Link></li>
                        <li><Link to="\">Фильмы</Link></li>
                        <li><Link to="\">Актёры</Link></li>
                        <li><Link to="\">Новости</Link></li>
                        <li><Link to="\">Подборки</Link></li>
                        <li><Link to="\">Категории</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.header__searchBar}>
                <input type="text" />
                <button></button>
            </div>
        </div>
     );
}
 
export default Header;