import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCT_API } from "../../../services/Api";

export const GetProducts = createAsyncThunk(
  "products/productslist",
  async (args) => {
    return await fetch(`${PRODUCT_API}/${args}`).then((res) => res.json());
  }
);
