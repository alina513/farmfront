import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from './selectors';

axios.defaults.baseURL = 'https://farmback.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/users/register', credentials);
      setAuthHeader(res.data.token);
      return res.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const fetchDrugs = createAsyncThunk(
  'drugs/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/drugs');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export  const fetchCartItems = createAsyncThunk(
  'shop/fetchCartItems',  // Ім'я action
  async () => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      return cartItems;
    } catch (error) {
      throw error; 
    }
  }
);

export const sendItemsToBackend = createAsyncThunk(
  'shop/sendItems',
  async ( items , thunkAPI) => {
    setAuthHeader(selectToken);
    try {
      console.log(items);
      const response = await Promise.all(
        items.map(async (item) => {
          return await axios.post('/api/shopingcard', item);
        })
      );
      // Отримати дані з кожної відповіді та повернути масив результатів
      return response;
    } catch (error) {
      // Обробити помилку та повернути значення для rejectWithValue
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);