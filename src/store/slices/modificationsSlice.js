import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adding: {},
  sidebarModal: {
    open: false,
  },
  showMobileNav: false,
};

export const modificationsSlice = createSlice({
  name: "modifications",
  initialState,
  reducers: {
    authModalStatus: (state, action) => {
      state.authModal.open = action.payload.open;
      state.authModal.from = action.payload.from;
    },
    toggleSidebar: (state, action) => {
      state.sidebarModal.open = action.payload.open;
    },
    toggleMobileNav: (state, action) => {
      state.showMobileNav = action.payload.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authModalStatus, toggleSidebar, toggleMobileNav } =
  modificationsSlice.actions;

export default modificationsSlice.reducer;
