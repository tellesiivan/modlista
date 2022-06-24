import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adding: null,
  submit: false,
};

export const modificationsSlice = createSlice({
  name: "modifications",
  initialState,
  reducers: {
    inProgressMod: (state, action) => {
      state.adding = action.payload.mod;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inProgressMod } = modificationsSlice.actions;

export default modificationsSlice.reducer;
