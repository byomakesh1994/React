import { createSlice } from "@reduxjs/toolkit";
import { fetchCocktails } from "./Action";
import { STATUS } from "./Status";

const initialState = {
  loading: STATUS.LOADING,
  cocktail: [],
  cocktails: [],
  error: STATUS.ERROR,
};

const SingleCocktailSlice = createSlice({
  name: "singleCocktail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
      state.cocktail = state.cocktails.find((e) => e.id == action.payload);
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default SingleCocktailSlice.reducer;
