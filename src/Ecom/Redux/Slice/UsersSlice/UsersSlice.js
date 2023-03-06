import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { GetUserAction } from "../../Action/Users/GetUserAction";

const initialState = {
  loading: STATUS.LOADING,
  users: [],
  user: {},
  error: STATUS.ERROR,
};

const UsersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(GetUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(GetUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(GetUserAction.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default UsersSlice.reducer;
