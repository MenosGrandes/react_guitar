import { DoubleMap } from "./DoubleMap";
import { Note, noteMap } from "./Note";
import { Scale } from "./Scale";
export const CMajor_Scale = new Scale(
  "C Major",
  noteMap.get(["C", "D", "E", "F", "G", "A", "B"])
);
export const AMajor_Scale = new Scale(
  "A Major",
  noteMap.get(["A", "B", "C", "D", "E", "F", "G"])
);
export const EMajor_PentatonicScale = new Scale(
  "E Major PentatonicScale",
  noteMap.get(["E", "G", "A", "B", "D", "E"])
);
export const GMajor_Scale = new Scale(
  "G Major",
  noteMap.get([ "G","A", "B", "C", "D", "E", "F#"])
);
export const allScales = [CMajor_Scale, AMajor_Scale, EMajor_PentatonicScale,GMajor_Scale];
export let scaleMap = new DoubleMap();
scaleMap.add(CMajor_Scale);
scaleMap.add(AMajor_Scale);
scaleMap.add(EMajor_PentatonicScale);
scaleMap.add(GMajor_Scale);

