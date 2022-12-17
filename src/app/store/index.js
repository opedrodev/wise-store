import { configureStore } from '@reduxjs/toolkit';
import cart from '../reducers/cart';
import products from '../reducers/products';

const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export default store;
