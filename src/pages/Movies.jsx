import { useState } from 'react';

import { FilmsMovies } from '../components/FilmGalleryMovies/FilmsMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(' ');
  const query = searchParams.get('query') ?? ' ';

  const change = event => {
    setSearch(event.currentTarget.value);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    if (search === ' ') {
      return setSearchParams({});
    }
    setSearchParams({ query: search });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input onChange={change} name="search" value={search} type="text" />
        <button type="submit"> Search </button>
      </form>
      {search.length > 0 && <FilmsMovies query={query} />}
    </div>
  );
};

export default Movies;
