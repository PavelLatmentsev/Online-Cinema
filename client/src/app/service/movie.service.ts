import { IFilmCard } from '../components/common/filmCard/filmCard.props';
import axios from 'axios';
const baseUrl = 'http://localhost:3111/api';
const movieEndpoint = '/movies';

const moviesService = {
  get: async () => {
    const { data } = await axios.get<IFilmCard[]>(baseUrl + movieEndpoint);
    return data;
  },
};
export default moviesService;
