import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_API } from "../../../services/Api";

export const SingleProduct = createAsyncThunk(
  "product/singleproduct",
  async (val) => {
    return await fetch(`${PRODUCT_API}/${val}`).then((res) => res.json());
  }
);
