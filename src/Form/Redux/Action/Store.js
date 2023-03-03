import { configureStore } from "@reduxjs/toolkit";
import editslice from "../Slice/EditSlice";
import listslice from "../Slice/ListSlice";

const store = configureStore({
  reducer: {
    users: listslice,
    user: editslice,
  },
});
export default store;
