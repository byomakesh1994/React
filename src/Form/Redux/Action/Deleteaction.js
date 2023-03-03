import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./Api";

export const Deleteuser = createAsyncThunk("delete/deleteuser", async (id) => {
  return await fetch(`${API}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
});
