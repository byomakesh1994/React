import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Action/Status";
import { UpdateUser } from "../Action/Updateaction";

const initialState = {
  loading: STATUS.LOADING,
  list: [],
  error: STATUS.ERROR,
};

const UpdateSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(UpdateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = [...state.list, action.payload];
    });

    builder.addCase(UpdateUser.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default UpdateSlice.reducer;
