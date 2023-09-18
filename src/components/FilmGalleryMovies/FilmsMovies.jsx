import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { fetchMovies } from 'components/Api';
import PropTypes from 'prop-types';

export const FilmsMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const location = useLocation();
  console.log(location);

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
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <li key={id}>{title}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

FilmsMovies.propTypes = {
  query: PropTypes.string,
};
