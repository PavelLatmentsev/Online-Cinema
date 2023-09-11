import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPage from "./app/components/pages/mainPage/mainPage";
import ActorsPage from "./app/components/pages/actorsPage/actorsPage";
import CategoryPage from "./app/components/pages/categoryPage/categoryPage";
import CollectionsPage from "./app/components/pages/collectionsPage/collectionsPage";
import EventPosterPage from "./app/components/pages/eventPosterPage/eventPosterPage";
import FeedbackPage from "./app/components/pages/feedbackPage/feedbackPage";
import FilmPage from "./app/components/pages/filmPage/filmPage";
import MediaPage from "./app/components/pages/mediaPage/mediaPage";
import NewsPage from "./app/components/pages/newsPage/newsPage";
import NotfoundPage from "./app/components/pages/notfoundPage/notfoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="actors" element={<ActorsPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="events" element={<EventPosterPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="films" element={<FilmPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
