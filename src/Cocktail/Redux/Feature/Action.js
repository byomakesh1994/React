import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../Api";

export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCoccktail",
  async () => {
    return await fetch(API).then((res) => res.json());
  }
);
