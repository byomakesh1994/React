import { createAsyncThunk } from "@reduxjs/toolkit";
import { CART_API } from "../../../services/Api";

export const GetCartsAction = createAsyncThunk(
  "carts/cartslist",
  async (args) => {
    return await fetch(`${CART_API}/${args}`).then((res) => res.json());
  }
);
