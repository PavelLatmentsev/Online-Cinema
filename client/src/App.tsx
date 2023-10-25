import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from 'react-router-dom';
import MainPageLayouts from './app/components/common/layouts/mainPageLayouts/mainPageLayouts';
import ActorsPage from './app/components/pages/actorsPage/actorsPage';
import CategoryPage from './app/components/pages/categoryPage/categoryPage';
import CollectionsPage from './app/components/pages/collectionsPage/collectionsPage';
import EventPosterPage from './app/components/pages/eventPosterPage/eventPosterPage';
import FeedbackPage from './app/components/pages/feedbackPage/feedbackPage';
import MediaPage from './app/components/pages/mediaPage/mediaPage';
import NewsPage from './app/components/pages/newsPage/newsPage';
import PostersPage from './app/components/pages/postersPage/postersPage';
import MoviesPage from './app/components/pages/moviesPage/moviesPage';
import NotFoundLayouts from './app/components/common/layouts/notFoundLayouts/notFoundLayouts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<MainPageLayouts />} />
        <Route
          path="actors/:actor?"
          element={<ActorsPage />}
          handle={{ crumb: () => <Link to="/actors">Актёры</Link> }}
        />
        <Route
          path="category"
          element={<CategoryPage />}
          handle={{ crumb: () => <Link to="/category">Категории</Link> }}
        />
        <Route
          path="collections"
          element={<CollectionsPage />}
          handle={{ crumb: () => <Link to="/collections">Подборки</Link> }}
        />
        <Route
          path="events"
          element={<EventPosterPage />}
          handle={{ crumb: () => <Link to="/events">Афиша</Link> }}
        />
        <Route
          path="feedback"
          element={<FeedbackPage />}
          handle={{ crumb: () => <Link to="/feedback">Обратная связь</Link> }}
        />
        <Route
          path="movies/:movie?"
          element={<MoviesPage />}
          handle={{ crumb: () => <Link to="/movies/">Фильмы</Link> }}
        />
        <Route
          path="posters"
          element={<PostersPage />}
          handle={{ crumb: () => <Link to="/posters">Постеры</Link> }}
        />
        <Route
          path="media"
          element={<MediaPage />}
          handle={{ crumb: () => <Link to="/media">Медиа</Link> }}
        />
        <Route
          path="news"
          element={<NewsPage />}
          handle={{ crumb: () => <Link to="/news">Новости</Link> }}
        />
        <Route path="*" element={<NotFoundLayouts />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
