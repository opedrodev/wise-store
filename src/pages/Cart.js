import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAllProductsFromCart } from '../app/reducers/cart';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import formatPrice from '../helpers/priceFormatter';

import styles from '../styles/pages/Cart.module.scss';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const onFinishPurchase = () => {
    dispatch(removeAllProductsFromCart());
    navigate('/thanks');
  };

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
            placeholder="Finalizar Compra"
            className={styles.button}
            onClick={onFinishPurchase}
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
