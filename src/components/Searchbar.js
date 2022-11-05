import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Input from './Input';

import styles from '../styles/components/Searchbar.module.scss';

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <Input placeholder="Search for something" className={styles.input} />
      <IoSearchOutline className={styles.icon} />
    </div>
  );
}

export default Searchbar;
