import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Action/Status";
import { Singleuser } from "../Action/Editaction";

const initialState = {
  loading: STATUS.LOADING,
  list: {
    name: "",
    email: "",
    select: "",
    date: "",
    checkbox: [],
    radio: "",
    rate: "",
  },
  error: STATUS.ERROR,
};

const EditSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Singleuser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Singleuser.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(Singleuser.rejected, (state, action) => {
      state.error = true;
    });
  },
});
export default EditSlice.reducer;
