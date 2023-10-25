import styles from './moviePage.module.scss';
import { useQuery } from '@tanstack/react-query';
import moviesService from '../../../service/movie.service';
import CommonButton from '../../common/button/commonButton';
import { Link } from 'react-router-dom';
import BreadCrumps from '../../common/breadcrumps/bredcrumps';
const MoviePage = ({ movie }: { movie: string }) => {
  const [currentMovie, reliseDate, id] = movie?.split('-') ?? [];
  const { data, isSuccess } = useQuery(['currentMovie'], () =>
    moviesService.getById(id),
  );
  console.log('currentMovie, reliseDate', currentMovie, reliseDate);
  return (
    isSuccess && (
      <div className={styles.container}>
        <div className={styles.currentMovie}>
          <div className={styles.infoBlock}>
            <div className={styles.infoBlock__art}>
              <img src={data?.url} alt={data?.name} />
            </div>
            <div className={styles.infoBlock__info}>
              <BreadCrumps />
              <h1 className={styles.infoBlock__name}>{data.name}</h1>
              <p className={styles.infoBlock__origName}>{data.originalName}</p>
              <div className={styles.infoBlock__ratingBlock}>
                <div>Kinoarea</div>
                <div>IMDb</div>
              </div>
              <p className={styles.infoBlock__description}>
                {data.description}
              </p>
              <div className={styles.infoBlock__btn}>
                <Link to={data.trailerUrl}>
                  <CommonButton
                    background="transparent"
                    border="2px solid var(--primary-first-color)"
                    color="var(--primary-first-color)"
                  >
                    Смотреть трейлер
                  </CommonButton>
                </Link>
                <img src="/img/icons/icons-social.svg" alt="social" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MoviePage;
