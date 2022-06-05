import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: {
    open: false,
    from: "login",
  },
  sidebarModal: {
    open: false,
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
    toggleSidebar: (state, action) => {
      state.sidebarModal.open = action.payload.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authModalStatus, toggleSidebar } = modalSlice.actions;

export default modalSlice.reducer;
