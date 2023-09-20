import styles from "./navBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.navigate}>
      <ul className={styles.navigate__order}>
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
  );
};

export default NavBar;
