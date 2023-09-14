import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { Loader } from '../components/loader/Loader';

export const Reviews = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  const [reviewsList, setReviewsList] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (!movie_id) {
      return;
    }
    setLoad(true);
    fetchReviews(movie_id)
      .then(data => setReviewsList(data.results))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, [movie_id]);

  return (
    <div>
      {load && <Loader />}
      <ul>
        {reviewsList.map(({ author, content }) => {
          return (
            <li>
              <h3>Autor:{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
