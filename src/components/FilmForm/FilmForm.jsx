import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetals } from 'components/Api';
import { Loader } from '../loader/Loader';
import { Img, Card } from './FilmForm styled';
import { Link, useLocation } from 'react-router-dom';

export const FilmForm = ({ movie_id }) => {
  const [movieDetals, setMovieDetals] = useState({});
  const [load, setLoad] = useState(false);
  const { backdrop_path, title, vote_average, overview } = movieDetals;
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  const location = useLocation();

  const backLocation = useRef(location.state?.from ?? '/movies');
  console.log(backLocation);
  console.log(location);
  useEffect(() => {
    if (!movie_id) {
      return;
    }
    setLoad(true);
    fetchMovieDetals(movie_id)
      .then(data => setMovieDetals(data))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, [movie_id]);

  return (
    <div>
      <Link to={backLocation.current}>GO BACK</Link>
      <Card>
        {load && <Loader />}
        <div>
          <Img
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                : defaultImg
            }
            alt="poster"
            width={250}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p> User score: {vote_average * 10}%</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres</h3>
        </div>
      </Card>
    </div>
  );
};
