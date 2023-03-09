import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../../services/Status";
import { SelectCategory } from "../../Action/Products/SelectProduct";

const initialState = {
  loading: STATUS.LOADING,
  category: [],
  error: STATUS.ERROR,
};

const SelectCategorySlice = createSlice({
  name: "category",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(SelectCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(SelectCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
    });

    builder.addCase(SelectCategory.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default SelectCategorySlice.reducer;
