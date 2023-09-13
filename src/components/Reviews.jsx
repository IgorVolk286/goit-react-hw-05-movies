import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';

export const Reviews = () => {
  const { movie_id } = useParams();
  // console.log(movie_id);
  // const [reviews, setReviews] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchReviews(movie_id)
      .then(data => console.log(data))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, [movie_id]);

  return <div>{load && <Loader />}</div>;
  // return (
  //   <div>
  //     <ul>
  //       {castList.map(({ character, name, profile_path }) => {
  //         return (
  //           <li>
  //             <img
  //               src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
  //               alt={name}
  //             />
  //             <h3>{name}</h3>
  //             <p>Character: {character}</p>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
};
