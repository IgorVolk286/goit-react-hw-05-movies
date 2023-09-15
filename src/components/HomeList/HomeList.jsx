import { useEffect, useState } from 'react';
import { Loader } from '../loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import { fetchHomeList } from 'components/Api';

import { HomeItem, TitleHome, HomelistWrap } from './HomeList styled';

export const HomeList = () => {
  const [dataList, setDataList] = useState([]);
  const [load, setLoad] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setLoad(true);
    fetchHomeList()
      .then(data => setDataList(data.results))
      .catch(error => alert(error.message))
      .finally(() => setLoad(false));
  }, []);
  console.log(location);
  return (
    <HomelistWrap>
      {load && <Loader />}
      <TitleHome>Trending Today</TitleHome>
      <ul>
        {dataList.map(({ title, id }) => {
          return (
            <HomeItem key={id} id={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </HomeItem>
          );
        })}
      </ul>
    </HomelistWrap>
  );
};
