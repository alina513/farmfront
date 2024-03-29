import { createSlice } from "@reduxjs/toolkit";
import {register} from './/operations';

const initialState = {
    user: { name: null, email: null, id: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
    },
  });
  
  export const authReducer = authSlice.reducer;
  export default authReducer;
  