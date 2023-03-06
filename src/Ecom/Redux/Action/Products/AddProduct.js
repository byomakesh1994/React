import { createAsyncThunk } from "@reduxjs/toolkit";
import Header from "../../../services/Header";
import { PRODUCT_API } from "../../../services/Api";

export const AddProduct = createAsyncThunk(
  "products/addproduct",
  async (value) => {
    return await fetch(`${PRODUCT_API}`, {
      method: "POST",
      headers: Header,
      body: JSON.stringify({
        name: value.name,
      }),
    }).then((res) => res.json());
  }
);
