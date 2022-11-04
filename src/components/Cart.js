import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

import styles from '../styles/components/Cart.module.scss';

function Cart() {
  return (
    <div className={styles.cart}>
      <IoCartOutline className={styles.icon} />
    </div>
  );
}

export default Cart;
