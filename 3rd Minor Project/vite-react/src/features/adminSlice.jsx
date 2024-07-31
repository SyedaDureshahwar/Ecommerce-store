import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('admin/fetchProducts', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addProduct = createAsyncThunk('admin/addProduct', async (product) => {
  const response = await axios.post(url, product);
  return response.data;
});

export const updateProduct = createAsyncThunk('admin/updateProduct', async (product) => {
  const response = await axios.put(`${url}/${product.id}`, product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('admin/deleteProduct', async (productId) => {
  await axios.delete(`${url}/${productId}`);
  return productId;
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export default adminSlice.reducer;
