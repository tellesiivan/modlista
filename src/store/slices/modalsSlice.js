import { createSlice } from "@reduxjs/toolkit";
import ImageUpload from "../../components/templates/ModTypes/sharable/ImageUpload";

const initialState = {
  authModal: {
    open: false,
    from: "login",
  },
  sidebarModal: {
    open: false,
  },
  showMobileNav: false,
  mainModal: {
    open: false,
    content: "",
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
    toggleMobileNav: (state, action) => {
      state.showMobileNav = action.payload.open;
    },
    toggleMainModal: (state, action) => {
      state.mainModal.open = action.payload.open;
    },
    setMainModalContent: (state, action) => {
      state.mainModal.content = action.payload.content;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  authModalStatus,
  toggleSidebar,
  toggleMobileNav,
  toggleMainModal,
  setMainModalContent,
} = modalSlice.actions;

export default modalSlice.reducer;
