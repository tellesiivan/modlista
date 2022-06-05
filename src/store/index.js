import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import modalsReducer from "./slices/modalsSlice";
export const store = configureStore({
  reducer: {
    userUI: uiReducer,
    modals: modalsReducer,
  },
});
