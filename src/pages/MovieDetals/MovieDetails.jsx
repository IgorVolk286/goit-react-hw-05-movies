import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { FilmForm } from '../../components/FilmForm/FilmForm';
import { CastLink, TitleReviews } from './MoviesDetals styled';
import { Suspense, useRef } from 'react';
//
const MovieDetails = () => {
  const { movie_id } = useParams();
  const location = useLocation();

  const backLocation = useRef(location.state?.from ?? '/movies');

  // console.log(backLocation);
  // console.log(location);
  return (
    <div>
      <Link to={backLocation.current}>GO BACK</Link>

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
