import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { GetProducts } from "../../Action/Products/GetProduct";

const initialState = {
  loading: STATUS.LOADING,
  products: [],
  error: STATUS.ERROR,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(GetProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(GetProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default ProductsSlice.reducer;
