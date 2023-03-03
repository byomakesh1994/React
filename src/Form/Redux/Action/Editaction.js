import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./Api";

export const Singleuser = createAsyncThunk("list/singleuser", async (id) => {
  return await fetch(`${API}/${id}`).then((res) => res.json());
});
