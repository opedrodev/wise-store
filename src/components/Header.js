import React from 'react';

import styles from '../styles/components/Header.module.scss';
import Cart from './Cart';
import Logo from './Logo';
import Searchbar from './Searchbar';

const { header } = styles;

function Header() {
  return (
    <header className={header}>
      <Logo />
      <Searchbar />
      <Cart />
    </header>
  );
}

export default Header;
