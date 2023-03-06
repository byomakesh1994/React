import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { DeleteProduct } from "../../Action/Products/DeleteProduct";

const initialState = {
  loading: STATUS.LOADING,
  products: [],
  error: STATUS.ERROR,
};

const ProductDetailsSlice = createSlice({
  name: "deleteproduct",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(DeleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(DeleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.filter(
        (user) => user.id !== action.payload
      );

      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>;

      window.location.reload();
    });

    builder.addCase(DeleteProduct.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default ProductDetailsSlice.reducer;
