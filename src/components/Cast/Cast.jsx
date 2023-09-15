import { useParams } from 'react-router-dom';
import { fetchCast } from 'components/Api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { ListCast, CastImg, TitleCaracter } from './Cast styled';

export const Cast = () => {
  const { movie_id } = useParams();

  const [castList, setCastList] = useState([]);
  const [load, setLoad] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    setLoad(true);
    fetchCast(movie_id)
      .then(data => setCastList(data.cast))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, [movie_id]);
  console.log(castList);
  return (
    <div>
      {load && <Loader />}
      <ListCast>
        {castList.map(({ character, name, profile_path }) => {
          return (
            <li>
              <CastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <h3>{name}</h3>
              <TitleCaracter>Character: {character}</TitleCaracter>
            </li>
          );
        })}
      </ListCast>
    </div>
  );
};
