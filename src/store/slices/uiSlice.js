import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  vehicles: [],
  isAuth: false,
  actionSelected: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload.user;
      if (state.user) {
        state.isAuth = true;
      }
    },
    selectedAction: (state, action) => {
      state.actionSelected = action.payload.action;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, selectedAction } = uiSlice.actions;

export default uiSlice.reducer;
