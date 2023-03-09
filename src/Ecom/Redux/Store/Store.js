import { configureStore } from "@reduxjs/toolkit";
import CartsSlice from "../Slice/CartsSlice/CartsSlice";
import ProductDetailsSlice from "../Slice/ProductsSlice/ProductDetailsSlice";
import ProductSlice from "../Slice/ProductsSlice/ProductSlice";
import SelectCategorySlice from "../Slice/ProductsSlice/SelectSlice";
import UsersSlice from "../Slice/UsersSlice/UsersSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    product: ProductDetailsSlice,
    users: UsersSlice,
    carts: CartsSlice,
    categories: SelectCategorySlice,
  },
});
export default store;
