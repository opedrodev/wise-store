import React from 'react';

import styles from '../styles/components/Header.module.scss';
import Cart from './Cart';
import Logo from './Logo';
import Searchbar from './Searchbar';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Searchbar />
      <Cart />
    </header>
  );
}

export default Header;
