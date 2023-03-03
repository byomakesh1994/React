import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./Api";

export const CreateUser = createAsyncThunk("list/adduser", async (value) => {
  return await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: value.name,
      email: value.email,
      select: value.select,
      date: value.date,
      checkbox: value.checkbox,
      radio: value.radio,
      rate: value.rate,
    }),
  }).then((res) => res.json());
});
