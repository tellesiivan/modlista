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
  uploading: false,
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
    uploadingMod: (state, action) => {
      state.uploading = action.payload.isUploading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inProgressMod, resetMod, uploadingMod } =
  modificationsSlice.actions;

export default modificationsSlice.reducer;
