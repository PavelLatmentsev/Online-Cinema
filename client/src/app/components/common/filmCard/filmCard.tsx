import { IFilmCard } from "./card.props";

import styles from "./filmCard.module.scss"
const filmCardmodulescssscss = ({ card }: IFilmCard) => {
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

export default filmCardmodulescssscss;
