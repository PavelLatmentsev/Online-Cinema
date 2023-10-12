import genreService from "../../../service/genre.service";
import { useQuery } from "@tanstack/react-query";
import { useGenreStore } from "../../../store/genreStore";
import styles from "./mainPage.module.scss";
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
      <section>
        <div className={styles.container}>
           <div className={styles.nowCinema}>
           <div>
            <h1>Сейчас в кино</h1>
            <div></div>
            <div>
              <ul>
                <li>Все</li>
                <li>Боевики</li>
                <li>Приключения</li>
                <li>Комедии</li>
                <li>Фантастика</li>
                <li>Триллеры</li>
                <li>Драма</li>
              </ul>
            </div>
           </div>
           <div></div>
           <button>Все новинки</button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
