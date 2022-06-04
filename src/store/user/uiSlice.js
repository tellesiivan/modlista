import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  vehicles: [],
  isAuth: false,
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
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = uiSlice.actions;

export default uiSlice.reducer;
