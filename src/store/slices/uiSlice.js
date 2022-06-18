import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  vehicles: {
    adding: null,
    previews: [],
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
    addVehiclePreviews: (state, action) => {
      state.vehicles.previews = action.payload.previews;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, selectedAction, addingVehicle, addVehiclePreviews } =
  uiSlice.actions;

export default uiSlice.reducer;
