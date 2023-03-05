import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { SingleProduct } from "../../Action/Products/ProductDetails";

const initialState = {
  loading: STATUS.LOADING,
  product: {},
  error: STATUS.ERROR,
};

const ProductDetailsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(SingleProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(SingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });

    builder.addCase(SingleProduct.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default ProductDetailsSlice.reducer;
