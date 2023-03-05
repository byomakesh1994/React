import { configureStore } from "@reduxjs/toolkit";
import ProductDetailsSlice from "../Slice/ProductsSlice/ProductDetailsSlice";
import ProductSlice from "../Slice/ProductsSlice/ProductSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    product: ProductDetailsSlice,
  },
});
export default store;
