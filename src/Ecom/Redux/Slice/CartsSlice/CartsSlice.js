import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { GetCartsAction } from "../../Action/Carts/CartsAction";

const initialState = {
  loading: STATUS.LOADING,
  carts: [],
  error: STATUS.ERROR,
};

const cartsSlice = createSlice({
  name: "cartslist",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(GetCartsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetCartsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.carts = action.payload;
    });

    builder.addCase(GetCartsAction.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default cartsSlice.reducer;
