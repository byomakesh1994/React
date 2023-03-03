import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Action/Status";
import { CreateUser } from "../Action/Addaction";

const initialState = {
  loading: STATUS.LOADING,
  list: [],
  error: STATUS.ERROR,
};

const ListSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CreateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CreateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = [...state.list, action.payload];
    });

    builder.addCase(CreateUser.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default ListSlice.reducer;
