import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./ProductReducer";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
export default store;
