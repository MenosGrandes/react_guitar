import { configureStore } from "@reduxjs/toolkit";
import scaleReducer from "./slices/scaleSlice";
import tileReducer from "./slices/tileSlice";

export const store = configureStore({
  reducer: {
    scale: scaleReducer,
    tiles: tileReducer,
  },
});
