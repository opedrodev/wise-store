import React from 'react';

import styles from '../styles/components/Header.module.scss';
import Cart from './Cart';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBar />
      <Cart />
    </header>
  );
}

export default Header;
