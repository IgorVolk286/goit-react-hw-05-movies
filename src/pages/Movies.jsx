// import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { FilmSMovies } from '../components/FilmGalleryMovies/FilmsMovies';
import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  // const [query, setQuery] = useState(' ');

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  const query = searchParams.get('query');

  const handlerSubmit = value => {
    setSearchParams({ query: value });
  };
  console.log(searchParams);
  // const handlerSubmit = query => {
  //   setQuery(query);
  // };

  return (
    <div>
      <Form submitForm={handlerSubmit} />
      <FilmSMovies query={query} />
    </div>
  );
};

export default Movies;
