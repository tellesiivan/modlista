import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: {
    open: false,
    from: "login",
  },
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    authModalStatus: (state, action) => {
      state.authModal.open = action.payload.open;
      state.authModal.from = action.payload.from;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authModalStatus } = modalSlice.actions;

export default modalSlice.reducer;
