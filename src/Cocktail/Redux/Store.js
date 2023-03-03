import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./Feature/CocktailSlice";
import SingleCocktail from "./Feature/SingleCocktail";

const store = configureStore({
  reducer: {
    cocktails: CocktailSlice,
    singlecocktail: SingleCocktail,
  },
});
export default store;
