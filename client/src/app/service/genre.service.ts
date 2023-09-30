import { IGenre } from "../../models/IGenre/IGenre";
import axios from "axios";
const genreEndpoint = "/genre";

const genreService = {
    get: async () => {
        const { data } = await axios.get<IGenre[]>("http://localhost:3111/api" + genreEndpoint);
        return data;
    }
};
export default genreService;