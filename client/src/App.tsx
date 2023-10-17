import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPageLayouts from "./app/components/common/layouts/mainPageLayouts/mainPageLayouts";
import ActorsPage from "./app/components/pages/actorsPage/actorsPage";
import CategoryPage from "./app/components/pages/categoryPage/categoryPage";
import CollectionsPage from "./app/components/pages/collectionsPage/collectionsPage";
import EventPosterPage from "./app/components/pages/eventPosterPage/eventPosterPage";
import FeedbackPage from "./app/components/pages/feedbackPage/feedbackPage";
import MediaPage from "./app/components/pages/mediaPage/mediaPage";
import NewsPage from "./app/components/pages/newsPage/newsPage";
import NotfoundPage from "./app/components/pages/notfoundPage/notfoundPage";
import PostersPage from "./app/components/pages/postersPage/postersPage";
import MoviesPage from "./app/components/pages/moviesPage/moviesPage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<MainPageLayouts />} />
        <Route path="actors/:actor?" element={<ActorsPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="events" element={<EventPosterPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="movies/:movie?" element={<MoviesPage />} />
        <Route path="posters" element={<PostersPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    )
  );

  return (

      <RouterProvider router={router} />

  );
}

export default App;
