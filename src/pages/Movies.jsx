import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { FilmSMovies } from '../components/FilmGalleryMovies/FilmsMovies';

const Movies = () => {
  const [query, setQuery] = useState(' ');

  const handlerSubmit = query => {
    setQuery(query);
  };

  return (
    <div>
      <Form submitForm={handlerSubmit} />
      <FilmSMovies query={query} />
    </div>
  );
};

export default Movies;
