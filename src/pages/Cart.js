import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import formatPrice from '../helpers/priceFormatter';

import styles from '../styles/pages/Cart.module.scss';

function Cart() {
  const cart = useSelector((state) => state.cart);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className={styles.cart}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.checkout}>
          <p>
            Total:
            &nbsp;
            { formatPrice(cartTotal)}
          </p>
          <Button
            placeholder="Checkout"
            className={styles.button}
          />
        </div>

        <div className={styles.items}>
          {cart.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cart;
