import { useState, useEffect } from 'react';
import { fetchMovieDetals } from 'components/Api';
import { Loader } from '../loader/Loader';
import { Img, Card } from './FilmForm styled';
import { Link } from 'react-router-dom';

export const FilmForm = ({ movie_id }) => {
  const [movieDetals, setMovieDetals] = useState({});
  const [load, setLoad] = useState(false);
  const { backdrop_path, title, vote_average, overview } = movieDetals;
  console.log(movieDetals);

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
      <Link to="/">GO BACK</Link>
      <Card>
        {load && <Loader />}
        <div>
          <Img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
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
