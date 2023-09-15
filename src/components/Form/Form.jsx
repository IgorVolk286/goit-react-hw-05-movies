import { useState } from 'react';

export const Form = ({ submitForm }) => {
  const [search, setSearch] = useState(' ');

  const change = event => {
    setSearch(event.currentTarget.value);
  };

  const submit = event => {
    event.preventDefault();
    submitForm(search);
    // setSearch(' ');
  };
  return (
    <form onSubmit={submit}>
      <input onChange={change} name="search" value={search} type="text" />
      <button type="submit"> Search </button>
    </form>
  );
};
