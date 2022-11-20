import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

import styles from '../styles/components/Searchbar.module.scss';

const { searchbar, input, icon } = styles;

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  /**
   * Handle the search input change and update the state.
   * @param {Object} event - Event object
   */
  const onChangeHandler = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  /**
   * Handle the search button click and redirect to the search page.
   */
  const onSearchHandler = () => {
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  /**
   * Handle the search form submit and redirect to the search page.
   * @param {Object} event - Event object
   */
  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSearchHandler();
  };

  return (
    <form className={searchbar} onSubmit={onSubmitHandler}>
      <Input
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder="Pesquise um produto"
        className={input}
      />
      <IoSearchOutline className={icon} onClick={onSearchHandler} />
    </form>
  );
}

export default Searchbar;
