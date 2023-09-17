import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './Global styled';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetals/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/" element={<Movies />} />
          <Route path="movies/:movie_id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
