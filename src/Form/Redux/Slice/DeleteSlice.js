import { createSlice } from "@reduxjs/toolkit";
import { Deleteuser } from "../Action/Deleteaction";
import { STATUS } from "../Action/Status";

const initialState = {
  loading: STATUS.LOADING,
  list: [],
  error: STATUS.ERROR,
};

const Deleteslice = createSlice({
  name: "delete",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Deleteuser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Deleteuser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = state.list.filter((user) => user.id != action.payload);
      //state.list = action.payload;
      window.location.reload();
    });

    builder.addCase(Deleteuser.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default Deleteslice.reducer;
