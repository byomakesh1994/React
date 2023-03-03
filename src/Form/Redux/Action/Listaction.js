import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./Api";

export const fetchListuser = createAsyncThunk("list/fetchList", async () => {
  return await fetch(API).then((res) => res.json());
});
