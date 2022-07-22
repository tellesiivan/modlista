import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showStickyUserInfo: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    triggerStickyUserInfo: (state, action) => {
      state.showStickyUserInfo = action.payload.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { triggerStickyUserInfo } = profileSlice.actions;

export default profileSlice.reducer;
