import { IFilmCard } from "./filmCard.props";

import styles from "./filmCard.module.scss"
const FilmCard = ({ card }:{card: IFilmCard}) => {
  console.log("card", card)
  return (
    <div className={styles.filmCard}>
      <div>
        <img src={card.url} alt={card.name} />
        <span>{card.rating}</span>
      </div>
      <div>{card.name}</div>
      <div>{card.genre}</div>
    </div>
  );
};

export default FilmCard;
