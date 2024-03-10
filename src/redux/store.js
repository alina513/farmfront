import { configureStore } from '@reduxjs/toolkit';
import drugsReducer from './drugsSlice';
import authReducer from './authSlice';
import  shopReducer  from '../redux/shopSlice';


export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    shop: shopReducer,
    auth: authReducer
  },
});

