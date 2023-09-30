import genreService from "../../../service/genre.service";
import { useQuery } from "@tanstack/react-query";
import { useGenreStore } from "../../../store/genreStore";
const MainPage = () => {
  const genre=useGenreStore(state=>state.genre);
  const setDatas=useGenreStore(state=>state.setData);
const { isLoading, isSuccess, error, data } = useQuery(
    ["genre"],
    () => genreService.get(),
    {
      onSuccess(data) {
        setDatas(data)
      }
    },

  );
  console.log("genre", genre);

  console.log("useQuery",data, isLoading, isSuccess, error);

  return (
    <main>

    </main>
  );
};

export default MainPage;
