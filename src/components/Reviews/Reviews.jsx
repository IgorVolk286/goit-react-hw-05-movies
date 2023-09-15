import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/Api';
import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { Wrap, Content } from './Reviews styled';
export const Reviews = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  const [reviewsList, setReviewsList] = useState([]);
  const [load, setLoad] = useState(false);
  const message = ` We don't have any reviews for with movie`;

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
    <Wrap>
      {load && <Loader />}
      {reviewsList.length !== 0 ? (
        <ul>
          {reviewsList.map(({ author, content }) => {
            return (
              <li>
                <h3>Autor:{author}</h3>
                <Content>{content}</Content>
              </li>
            );
          })}
        </ul>
      ) : (
        message
      )}
    </Wrap>
  );
};
