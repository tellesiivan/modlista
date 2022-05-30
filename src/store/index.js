import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./user/uiSlice";
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
