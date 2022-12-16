import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../../services/localStorage';

const INITIAL_STATE = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProductToCart(state, action) {
      const product = action.payload;
      const productInCart = state.find((item) => item.id === product.id);
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },

    incrementProductQuantity(state, action) {
      const product = action.payload;
      const productInCart = state.find((item) => item.id === product.id);
      if (productInCart) {
        productInCart.quantity += 1;
      }
      saveCartToLocalStorage(state);
    },

    decrementProductQuantity(state, action) {
      const product = action.payload;
      const productInCart = state.find((item) => item.id === product.id);
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      }
      saveCartToLocalStorage(state);
    },

    removeProductFromCart(state, action) {
      const product = action.payload;
      const productInCart = state.find((item) => item.id === product.id);
      state.splice(state.indexOf(productInCart), 1);
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addProductToCart,
  incrementProductQuantity, decrementProductQuantity, removeProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
