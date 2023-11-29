import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tiles: {},
};

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    change_oposite: (state, action) => {
      state.tiles[action.payload.id] = !state.tiles[action.payload.id];
    },
    /*
      action.payload = {id : number, value : bool}
    */
      addTile: (state, action) => {
      state.tiles[action.payload.id] = action.payload.value;
    },
    change_to: (state, action) => {
      state.tiles[action.payload.id] = action.payload.value;
    },
  },
});

export const { change_oposite, change_to , addTile } = tileSlice.actions;

export default tileSlice.reducer;
