import { Link, Outlet, useParams } from 'react-router-dom';
import { FilmForm } from '../components/FilmForm/FilmForm';

const MovieDetails = () => {
  const { movie_id } = useParams();

  return (
    <div>
      <FilmForm movie_id={movie_id} />
      <h2>Addishional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
