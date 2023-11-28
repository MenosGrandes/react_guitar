import { noteMap } from "./Note";
export class TuningNotes {
  static NORMAL = new TuningNotes(noteMap.get(["E", "A", "D", "G", "B", "E"]));

  constructor(notes) {
    this.notes = notes;
  }
  toString() {
    return `Tuning.${this.notes}`;
  }
}
