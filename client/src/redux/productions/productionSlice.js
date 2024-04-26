import { createSlice } from "@reduxjs/toolkit";

export const productionSlice = createSlice({
  name: 'production',
  initialState: {
    productionList: [],
  },
  reducers: {
    setProductions: (state, action) => {
      state.productionList = action.payload;
    },
    
  }
});

export const {setProductions, fetchAllProductions} = productionSlice.actions;

export default productionSlice.reducer;