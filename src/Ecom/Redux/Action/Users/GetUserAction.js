import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERS_API } from "../../../services/Api";

export const GetUserAction = createAsyncThunk(
  "users/userslist",
  async (args) => {
    return await fetch(`${USERS_API}/${args}`).then((res) => res.json());
  }
);
