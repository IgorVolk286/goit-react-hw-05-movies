import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { fetchMovies } from 'components/Api';
import PropTypes from 'prop-types';

export const FilmSMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    } else {
      setLoad(true);

      const controller = new AbortController();

      fetchMovies(query)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error))
        .finally(() => setLoad(false));

      return () => {
        controller.abort();
      };
    }
  }, [query]);

  return (
    <div>
      {load && <Loader />}

      {movies.map(({ title, id }) => {
        return (
          <ul>
            <Link to={`/movies/${id}`}>
              <li key={id} state={{ from: location }}>
                {title}
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

FilmSMovies.propTypes = {
  query: PropTypes.string,
};
