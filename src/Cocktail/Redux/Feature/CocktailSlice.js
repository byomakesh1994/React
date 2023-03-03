import { createSlice } from "@reduxjs/toolkit";
import { fetchCocktails } from "./Action";
import { STATUS } from "./Status";

const initialState = {
  loading: STATUS.LOADING,
  cocktails: [],
  cocktail: [],
  error: STATUS.ERROR,
};

const CocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.error = true;
    });
  },

  //   extraReducers: {
  //     [fetchCocktails.pending]: (state, action) => {
  //       state.loading = true;
  //     },
  //     [fetchCocktails.fulfilled]: (state, action) => {
  //       state.loading = false;
  //       state.cocktails = action.payload.drinks;
  //     },
  //     [fetchCocktails.rejected]: (state, action) => {
  //       state.loading = false;
  //     },
  //   },
});
export default CocktailSlice.reducer;
