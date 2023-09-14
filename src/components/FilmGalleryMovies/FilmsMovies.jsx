import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { fetchMovies } from 'components/Api';

export const FilmSMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!query) {
      alert(`Enter film name`);
    } else {
      setLoad(true);
      fetchMovies(query)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error))
        .finally(() => setLoad(false));
    }
  }, [query]);

  return (
    <div>
      {load && <Loader />}

      {movies.map(({ title, id }) => {
        return (
          <ul>
            <Link to={`/movies/${id}`}>
              <li key={id}>{title}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
