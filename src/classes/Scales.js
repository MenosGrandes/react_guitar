import { Note, n } from "./Note";
import { Scale } from "./Scale";
export const CMajor_Scale = new Scale("C Major",n.get(['C','D','E','F','G','A','B']));
export const AMajor_Scale = new Scale("A Major",n.get(['A','B','C','D','E','F','G']));
export const EMajor_PentatonicScale = new Scale("EMajor_PentatonicScale",n.get(['E','G','A','B','D','E']));
export const allScales = [CMajor_Scale,AMajor_Scale,EMajor_PentatonicScale];