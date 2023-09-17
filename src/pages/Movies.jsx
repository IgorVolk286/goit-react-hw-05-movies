// import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { FilmSMovies } from '../components/FilmGalleryMovies/FilmsMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [query, setQuery] = useState(' ');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handlerSubmit = value => {
    if (value === ' ') {
      return setSearchParams({});
    }
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Form submitForm={handlerSubmit} />
      <FilmSMovies query={query} />
    </div>
  );
};

export default Movies;
