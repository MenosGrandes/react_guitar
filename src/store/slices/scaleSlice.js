import { createSlice } from "@reduxjs/toolkit";
import { CMajor_Scale, scaleMap } from "../../classes/Scales";

const initialState = {
  scale: CMajor_Scale.name,
};

export const scaleSlice = createSlice({
  name: "scale",
  initialState,
  reducers: {
    changeTo: (state, action) => {
      state.scale = action.payload;
    },
  },
});

export const { changeTo } = scaleSlice.actions;

export default scaleSlice.reducer;
