import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  vehicles: {
    adding: null,
    current: [],
  },
  isAuth: false,
  actionSelected: "Profile",
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
    addingVehicle: (state, action) => {
      state.vehicles.adding = action.payload.vehicle;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, selectedAction, addingVehicle } = uiSlice.actions;

export default uiSlice.reducer;
