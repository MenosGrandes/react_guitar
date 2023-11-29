import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tiles: {},
};

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    change: (state, action) => {
      state.tiles[action.payload.id] = !state.tiles[action.payload.id];
    },
    /*
      action.payload = {id : number, value : bool}
    */
      addTile: (state, action) => {
      state.tiles[action.payload.id] = action.payload.value;
    },
  },
});

export const { change, addTile } = tileSlice.actions;

export default tileSlice.reducer;
