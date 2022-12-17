import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementProductQuantity, incrementProductQuantity, removeProductFromCart } from '../app/reducers/cart';
import Button from './Button';

import styles from '../styles/components/CartItem.module.scss';
import formatPrice from '../helpers/priceFormatter';

function CartItem(props) {
  const { item } = props;

  const dispatch = useDispatch();

  return (
    <div className={styles.cart_item}>
      <img
        src={item.thumbnail}
        alt={item.title}
        className={styles.thumbnail}
      />
      <h3 className={styles.title}>{item.title}</h3>

      <p className={styles.price}>{formatPrice(item.price)}</p>

      <p className={styles.quantity}>
        Qty:
        &nbsp;
        {item.quantity}
      </p>

      <div className={styles.controls}>
        <Button
          placeholder="+"
          onClick={() => dispatch(incrementProductQuantity(item))}
        />
        <Button
          placeholder="-"
          onClick={() => dispatch(decrementProductQuantity(item))}
        />
        <Button
          placeholder="X"
          onClick={() => dispatch(removeProductFromCart(item))}
        />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
