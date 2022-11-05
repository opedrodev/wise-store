import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import Input from './Input';

import styles from '../styles/components/Searchbar.module.scss';

const { searchbar, input, icon } = styles;

function Searchbar() {
  return (
    <div className={searchbar}>
      <Input placeholder="Search for something" className={input} />
      <IoSearchOutline className={icon} />
    </div>
  );
}

export default Searchbar;
