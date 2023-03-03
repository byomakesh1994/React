import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Action/Status";
import { fetchListuser } from "../Action/Listaction";

const initialState = {
  loading: STATUS.LOADING,
  list: [],
  error: STATUS.ERROR,
};

const ListSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchListuser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchListuser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });

    builder.addCase(fetchListuser.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default ListSlice.reducer;
