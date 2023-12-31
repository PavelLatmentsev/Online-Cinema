import { useQuery } from '@tanstack/react-query';
import styles from './mainPage.module.scss';
import CommonButton from '../../common/button/commonButton';
import moviesService from '../../../service/movie.service';
import FilmCard from '../../common/filmCard/filmCard';
import { IFilmCard } from '../../common/filmCard/filmCard.props';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const { isLoading, isSuccess, error, data } = useQuery(['movies'], () =>
    moviesService.get(),
  );
  console.log('useQuery', data, isLoading, isSuccess, error);

  const getShuffle = (array: IFilmCard[]) => {
    return array.sort(() => Math.random() - 0.5);
  };
  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className={styles.nowCinema}>
            <div className={styles.nowCinema__title}>
              <h1 className={styles.nowCinema__title__header}>Сейчас в кино</h1>
              <div className={styles.nowCinema__title__devider}></div>

              <ul className={styles.nowCinema__title__order}>
                <li>Все</li>
                <li>Боевики</li>
                <li>Приключения</li>
                <li>Комедии</li>
                <li>Фантастика</li>
                <li>Триллеры</li>
                <li>Драма</li>
              </ul>
            </div>
            <div className={styles.filmCards}>
              {isSuccess ? (
                getShuffle(data).map(movie => {
                  return (
                    <Link
                      to={`movies/${movie.name}-${movie.release}-${movie._id}`}
                      key={movie._id}
                    >
                      {' '}
                      <FilmCard card={movie} />{' '}
                    </Link>
                  );
                })
              ) : (
                <div>Loading...</div>
              )}{' '}
            </div>
            <CommonButton background="transparent">Все новинки</CommonButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
