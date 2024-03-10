import { createSlice} from "@reduxjs/toolkit";
import { fetchCartItems } from "../redux/operations";


const shopInitialState = {
    items: [],
    isLoading: false,
    // error: null,
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
        });
    }
  });
 
  
  // const drugsReducer = drugsSlice.reducer;
  // export default drugsReducer;
  export const { setCartItems } = shopSlice.actions;
   const {shopReducer}  = shopSlice.reducer;
   export default shopReducer;
