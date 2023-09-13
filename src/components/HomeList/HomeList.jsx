import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { Link } from 'react-router-dom';
import { fetchHomeList } from 'components/Api';

export const HomeList = () => {
  const [dataList, setDataList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetchHomeList()
      .then(data => setDataList(data.results))
      .catch(error => alert('error.message'))
      .finally(() => setLoad(false));
  }, []);

  return (
    <div>
      {load && <Loader />}
      <h1>Trending Today</h1>
      <ul>
        {dataList.map(({ title, id }) => {
          return (
            <li key={id} id={id}>
              <Link to={`/movies/${id}`}>{title} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
