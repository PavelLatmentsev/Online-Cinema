import styles from './moviePage.module.scss';
import { useQuery } from '@tanstack/react-query';
import moviesService from '../../../service/movie.service';
const MoviePage = ({ movie }: { movie: string }) => {
  const [currentMovie, reliseDate, id] = movie?.split('-') ?? [];
  const { data } = useQuery(['currentMovie'], () => moviesService.getById(id));

  return (
    data && (
      <div className={styles.currentMovie}>
        <div>
          <img src={data?.url} alt={data?.name} />
          <h1>{currentMovie}</h1>
          <span>{reliseDate}</span>
        </div>
      </div>
    )
  );
};

export default MoviePage;
