import { useParams } from 'react-router-dom';
import styles from './moviePage.module.scss';
import moviesService from '../../../service/movie.service';
import { useQuery } from '@tanstack/react-query';
const MoviePage = () => {
  const { movie } = useParams();
  const [currentMovie, reliseDate, id] = movie?.split('-') ?? [];
  const { data } = useQuery(['currentFilm'], () => moviesService.get());
  console.log(currentMovie, reliseDate, id, data);
  return (
    <div className={styles.currentMovie}>
      <div>
        {/* <img src={} alt="" /> */}
        <h1>current film</h1>
      </div>
    </div>
  );
};

export default MoviePage;
