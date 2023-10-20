import { IFilmCard } from './filmCard.props';

import styles from './filmCard.module.scss';
const FilmCard = ({ card }: { card: IFilmCard }) => {
  const modernRating = card.rating.replace(',', '.');

  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCard__imgWrapper}>
        <img className={styles.filmCard__img} src={card.url} alt={card.name} />
        <div
          className={`${styles.filmCard__rating} ${
            Number(modernRating) < 5 ? styles.downRate : ''
          }`}
        >
          {modernRating}
        </div>
      </div>
      <div className={styles.filmCard__name}>{card.name}</div>
      <div className={styles.filmCard__genre}>{card.genre}</div>
    </div>
  );
};

export default FilmCard;
