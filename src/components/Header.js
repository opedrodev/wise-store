import React from 'react';

import styles from '../styles/components/Header.module.scss';
import CartIcon from './CartIcon';
import Logo from './Logo';
import Searchbar from './Searchbar';

const { header } = styles;

function Header() {
  return (
    <header className={header}>
      <Logo />
      <Searchbar />
      <CartIcon />
    </header>
  );
}

export default Header;
