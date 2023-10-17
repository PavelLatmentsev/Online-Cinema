import {  useParams } from "react-router-dom";
import MoviePage from "../moviePage/moviePage";

const MoviesPage = () => {
  const {movie} = useParams();
  
  return movie ? <MoviePage/> : <h1>MoviesPage </h1>;
};

export default MoviesPage;
