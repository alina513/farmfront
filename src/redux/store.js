import { configureStore } from '@reduxjs/toolkit';
import drugsReducer from './drugsSlice';
import authReducer from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  shopReducer  from '../redux/shopSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    shop: shopReducer,
    // filters: filterReducer,
    // auth: persistReducer(authPersistConfig, authReducer)
  },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);