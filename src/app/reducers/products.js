/* eslint no-param-reassign: "error" */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductsFromCategoryId, getProductsFromQuery } from '../../services/api';

/**
 * Fetch products by category id.
 * @memberof `products`
 * @param {string} id - Category id
 * @returns {Object} - Products
 */
export const fetchByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (category) => {
    const response = await getProductsFromCategoryId(category);
    return response;
  },
);

/**
 * Fetch products by query.
 * @memberof `products`
 * @param {string} query - Search query
 * @returns {Object} - Products
 */
export const fetchByQuery = createAsyncThunk(
  'products/fetchByQuery',
  async (query) => {
    if (!query) return { results: [] };

    const response = await getProductsFromQuery(query);
    return response;
  },
);

const initialState = {
  items: [],
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchByCategory.pending, (state) => {
        state.items = [];
        state.loading = true;
      })
      .addCase(fetchByCategory.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchByQuery.pending, (state) => {
        state.items = [];
        state.loading = true;
      })
      .addCase(fetchByQuery.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export const { setLoading, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
