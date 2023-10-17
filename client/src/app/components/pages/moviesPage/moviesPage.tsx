import {  useParams } from "react-router-dom";
import MoviePAge from "../moviePage/moviePage";

const MoviesPage = () => {
  const {movie} = useParams();
  
  return movie ? <MoviePAge/> : <h1>MoviesPage </h1>;
};

export default MoviesPage;
