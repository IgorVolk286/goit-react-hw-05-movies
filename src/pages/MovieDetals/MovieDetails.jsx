import { Outlet, useParams } from 'react-router-dom';
import { FilmForm } from '../../components/FilmForm/FilmForm';
import { CastLink, TitleReviews } from './MoviesDetals styled';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movie_id } = useParams();

  return (
    <div>
      <FilmForm movie_id={movie_id} />
      <TitleReviews>Addishional information</TitleReviews>
      <ul>
        <li>
          <CastLink to="cast">Cast</CastLink>
        </li>
        <li>
          <CastLink to="reviews">Reviews</CastLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
