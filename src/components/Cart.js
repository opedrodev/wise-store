import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

import styles from '../styles/components/Cart.module.scss';

const { cart, icon } = styles;

function Cart() {
  return (
    <div className={cart}>
      <IoCartOutline className={icon} />
    </div>
  );
}

export default Cart;
