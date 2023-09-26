import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import NavBar from "../navBar/navBar";

const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <div>
              <Link to="\">
                <img src="/img/logo/Logo.png" alt="logo" />
              </Link>
            </div>
            <div>
              <img
                src="/img/icons/icons-social.svg"
                alt="social"
              />
            </div>
          </div>
          <NavBar />
          <div className={styles.header__searchBar}>
            <div className={styles.header__searchBar__wrapperSearch}>
              <input type="text" className={styles.header__searchBar__search} />
              <img
                src="/img/icons/search.svg"
                alt="search"
                className={styles.header__searchBar__icons}
              />
            </div>
            <button className={styles.header__searchBar__btn}>Войти</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
