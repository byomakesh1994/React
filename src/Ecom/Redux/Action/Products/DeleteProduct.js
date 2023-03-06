import { createAsyncThunk } from "@reduxjs/toolkit";
import Header from "../../../components/Header";
import { PRODUCT_API } from "../../../services/Api";

export const DeleteProduct = createAsyncThunk(
  "products/deleteproduct",
  async (args) => {
    return await fetch(`${PRODUCT_API}/${args}`, {
      method: "DELETE",
      headers: Header,
    }).then((res) => res.json());
  }
);
