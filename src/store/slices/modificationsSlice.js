import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adding: {
    details: {
      tags: [],
      desc: "",
      title: "",
      ratingValue: 0,
      price: "",
      url: {
        link: "",
        isValid: false,
      },
      image: "",
    },
  },
  submit: false,
};

export const modificationsSlice = createSlice({
  name: "modifications",
  initialState,
  reducers: {
    inProgressMod: (state, action) => {
      state.adding.details = action.payload.mod;
    },
    resetMod: (state) => {
      state.adding.details = initialState.adding.details;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inProgressMod, resetMod } = modificationsSlice.actions;

export default modificationsSlice.reducer;
