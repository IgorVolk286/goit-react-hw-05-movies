import { useState, useEffect } from 'react';
import { fetchMovieDetals } from 'components/Api';
import { Loader } from '../loader/Loader';
import { Img, Card } from './FilmForm styled';
// import { Link, useLocation } from 'react-router-dom';

export const FilmForm = ({ movie_id }) => {
  const [movieDetals, setMovieDetals] = useState({});
  const [load, setLoad] = useState(false);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

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

  const { backdrop_path, title, vote_average, name, overview } = movieDetals;
  return (
    <div>
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
          <h1>{title || name}</h1>
          <p> User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {/* <p>{movieDetals.genres.map(el => el.name).join(', ')}</p> */}
        </div>
      </Card>
    </div>
  );
};
