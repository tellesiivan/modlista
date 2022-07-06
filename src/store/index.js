import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import modalsReducer from "./slices/modalsSlice";
import modificationsReducer from "./slices/modificationsSlice";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    userUI: uiReducer,
    modals: modalsReducer,
    modifications: modificationsReducer,
  },
});
