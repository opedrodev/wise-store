import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Input from './Input';

import styles from '../styles/components/SearchBar.module.scss';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <Input placeholder="Search for something" className={styles.input} />
      <IoSearchOutline className={styles.icon} />
    </div>
  );
}

export default SearchBar;
