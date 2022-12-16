import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementProductQuantity, incrementProductQuantity, removeProductFromCart } from '../app/reducers/cart';
import Button from '../components/Button';
import Header from '../components/Header';
import formatPrice from '../helpers/priceFormatter';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section>
      <Header />

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
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
      ))}

      <h1>
        Total:
        &nbsp;
        { formatPrice(cartTotal)}
      </h1>
    </section>
  );
}

export default Cart;
