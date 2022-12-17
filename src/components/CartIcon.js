import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from '../styles/components/CartIcon.module.scss';

function CartIcon() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const onCartClick = () => {
    if (pathname !== '/cart') navigate('/cart');
  };

  return (
    <div
      className={styles.cart_icon}
      onClick={onCartClick}
      aria-hidden
    >
      <IoCartOutline className={styles.icon} />
      <p className={styles.quantity}>{cart.length}</p>
    </div>
  );
}

export default CartIcon;
