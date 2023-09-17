import { useState } from 'react';
import PropTypes from 'prop-types';

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

Form.propTypes = {
  submitForm: PropTypes.func,
};
