import { createSlice} from "@reduxjs/toolkit";
import { fetchCartItems, sendItemsToBackend } from "../redux/operations";


const shopInitialState = {
    items: [],
    isLoading: false,
  };
  
  const shopSlice = createSlice({
    name: 'shop',
    initialState: shopInitialState,

    extraReducers: (builder) => {
      builder
        .addCase(fetchCartItems.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchCartItems.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
        })
        .addCase(fetchCartItems.rejected, (state) => {
          state.isLoading = false;
        })
      .addCase(sendItemsToBackend.pending, state => {
        state.isLoading = true;
      })
      .addCase(sendItemsToBackend.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = action.payload;
      })
      .addCase(sendItemsToBackend.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    }
  })
 

   const shopReducer  = shopSlice.reducer;
   export default shopReducer;
