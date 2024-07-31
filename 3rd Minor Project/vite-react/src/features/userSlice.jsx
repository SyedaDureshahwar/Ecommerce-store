import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const fetchProductDetail = createAsyncThunk('user/fetchProductDetail', async (productId) => {
  const response = await axios.get(`${url}/${productId}`);
  return response.data;
});

// Fetch order history from local storage
export const fetchOrderHistory = createAsyncThunk('user/fetchOrderHistory', async () => {
  const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
  return orders;
});

// Save order to local storage
export const saveOrder = createAsyncThunk('user/saveOrder', async (order, { dispatch }) => {
  let orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
  orders.push(order);
  localStorage.setItem('orderHistory', JSON.stringify(orders));
  dispatch(fetchOrderHistory()); // Refresh order history
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: [],
    productDetail: {},
    cart: [],
    orders: [],
    orderHistory: [], // Add orderHistory to the initial state
    shippingInfo: {},
    paymentInfo: {},
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ id, title, image, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    setPaymentInfo: (state, action) => {
      state.paymentInfo = action.payload;
    },
    setOrderHistory: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOrderHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.orderHistory = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, setShippingInfo, setPaymentInfo, setOrderHistory } = userSlice.actions;

export default userSlice.reducer;
