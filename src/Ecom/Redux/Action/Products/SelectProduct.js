import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_API } from "../../../services/Api";

export const SelectCategory = createAsyncThunk(
  "products/selectproduct",
  async (args) => {
    return await fetch(`${PRODUCT_API}/${args}`).then((res) => res.json());
  }
);
