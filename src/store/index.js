import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./user/uiSlice";
import modalsReducer from "./user/modalsSlice";
export const store = configureStore({
  reducer: {
    userUI: uiReducer,
    modals: modalsReducer,
  },
});
