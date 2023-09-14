import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/Api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
export const Cast = () => {
  const { movie_id } = useParams();

  const [castList, setCastList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchCast(movie_id)
      .then(data => setCastList(data.cast))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, [movie_id]);

  return (
    <div>
      {load && <Loader />}
      <ul>
        {castList.map(({ character, name, profile_path }) => {
          return (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
