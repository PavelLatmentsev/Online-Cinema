import { useParams } from 'react-router-dom';
import moviesService from '../../../service/movie.service';
import { useQuery } from '@tanstack/react-query';
import MoviePage from '../moviePage/moviePage';

const MoviesPage = () => {
  const { movie } = useParams();
  const { data } = useQuery(['movies'], () => moviesService.get());
  return movie ? (
    <MoviePage movie={movie} />
  ) : (
    <ul>
      {data &&
        data.map(movie => {
          return <li key={movie._id}>{movie.name}</li>;
        })}{' '}
    </ul>
  );
};

export default MoviesPage;
