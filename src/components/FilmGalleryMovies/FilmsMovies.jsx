import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../loader/Loader';

export const FilmSMovies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!query) {
      alert(`vvngjhgj`);
    } else {
      setLoad(true);
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTcyZWY2NDFlMjljMDQ4ODUyMDU0OThkYTgzM2MxMCIsInN1YiI6IjY1MDA4MTQxZGI0ZWQ2MTAzODU1ZjQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tw33p16nzVWjFsb-CvIHBGuQg-2EWj-24ivkLMNAZS8',
          },
        }
      )
        .then(response => {
          return response.json();
        })
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
            <Link to="/movies/:movieId">
              <li key={id}>{title}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
