import { useState, useEffect } from 'react';
import { fetchMovieDetals } from 'components/Api';
import { Loader } from '../loader/Loader';
export const FilmForm = ({ movie_id }) => {
  const [movieDetals, setMovieDetals] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchMovieDetals(movie_id)
      .then(data => setMovieDetals(data))
      .catch(error => alert('error.message'))
      .finally(() => setLoad(false));
  }, [movie_id]);
  return (
    <div>
      {load && <Loader />}
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetals.backdrop_path}`}
          alt={movieDetals.title}
        />
      </div>
      <div>
        <h2>{movieDetals.title}</h2>
        <p> User score: {movieDetals.vote_average}</p>
        <h3>Overview </h3>
        <p>{movieDetals.overview}</p>
        <h3>Genres</h3>
        {/* <ul>
          {movieDetals.genres.map(({ name }) => {
            return (
              <>
                <li>{name}</li>
              </>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};
