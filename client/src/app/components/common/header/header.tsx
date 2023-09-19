import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.header__logo}>
              <div>
                <img src="../../../../../public/img/logo/Logo.png" alt="logo" />
              </div>
              <div>
                <img
                  src="../../../../../public/img/logo/icons-social.svg"
                  alt="social"
                />
              </div>
            </div>
            <div className={styles.header__navigate}>
              <nav>
                <ul className={styles.header__navigate__order}>
                  <li>
                    <Link to="posters">Афиша</Link>
                  </li>
                  <li>
                    <Link to="media">Медиа</Link>
                  </li>
                  <li>
                    <Link to="movies">Фильмы</Link>
                  </li>
                  <li>
                    <Link to="actors">Актёры</Link>
                  </li>
                  <li>
                    <Link to="news">Новости</Link>
                  </li>
                  <li>
                    <Link to="collections">Подборки</Link>
                  </li>
                  <li>
                    <Link to="category">Категории</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.header__searchBar}>
              <div className={styles.header__searchBar__wrapperSearch}>
                <input type="text"  className={styles.header__searchBar__search} />
                <img src="../../../../../public/img/icons/search.svg" alt="search"  className={styles.header__searchBar__icons}/>
              </div>
              <button className={styles.header__searchBar__btn}>Войти</button>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
