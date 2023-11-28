import { configureStore } from "@reduxjs/toolkit";
import scaleReducer from "./slices/scaleSlice";
export const store = configureStore({
  reducer: {
    scale: scaleReducer,
  },
});
