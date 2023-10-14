import { IFilmCard } from "../components/common/filmCard/card.props";
import axios from "axios";
const movieEndpoint = "/movies";

const moviesService = {
    get: async () => {
        const { data } = await axios.get<IFilmCard[]>("http://localhost:3111/api" + movieEndpoint);
        return data;
    }
};
export default moviesService;