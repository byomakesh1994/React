import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./Api";

export const UpdateUser = createAsyncThunk(
  "list/updateuser",
  async ({ id, user }) => {
    return await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        select: user.select,
        date: user.date,
        checkbox: user.checkbox,
        radio: user.radio,
        rate: user.rate,
      }),
    }).then((res) => res.json());
  }
);
