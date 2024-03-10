import { createSlice} from "@reduxjs/toolkit";
import { fetchDrugs} from "./operations";

const drugssInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };
  
  const drugsSlice = createSlice({
    name: 'drugs',
    initialState: drugssInitialState,
    extraReducers: builder => {
      builder
      .addCase(fetchDrugs.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDrugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchDrugs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    },
  });
  
  const drugsReducer = drugsSlice.reducer;
  export default drugsReducer;
  