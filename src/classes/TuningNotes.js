import { n } from "./Note";
export class TuningNotes {
  static NORMAL = new TuningNotes(
    n.get(['E', 'A', 'D', 'G', 'B', 'E'])
  );

  constructor(notes) {
    this.notes = notes;
  }
  toString() {
    return `Tuning.${this.notes}`;
  }
}
