import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
});

const ProductReducer = createSlice({
  name: "productReducer",
  initialState: {
    data: [],
    status: STATUS.success,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = ProductReducer.actions;
export default ProductReducer.reducer;
