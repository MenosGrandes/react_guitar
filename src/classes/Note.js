import { DoubleMap } from "./DoubleMap";

export class Note {
  static A = new Note("A");
  static A_h = new Note("A#");

  static B = new Note("B");

  static C = new Note("C");
  static C_h = new Note("C#");

  static D = new Note("D");
  static D_h = new Note("D#");

  static E = new Note("E");

  static F = new Note("F");
  static F_h = new Note("F#");

  static G = new Note("G");
  static G_h = new Note("G#");

  constructor(name) {
    this.name = name;
  }
  toString() {
    return `Note.${this.name}`;
  }

  next() {
    switch (this.name) {
      case Note.A.name:
        return Note.A_h;
      case Note.A_h.name:
        return Note.B;

      case Note.B.name:
        return Note.C;

      case Note.C.name:
        return Note.C_h;
      case Note.C_h.name:
        return Note.D;

      case Note.D.name:
        return Note.D_h;
      case Note.D_h.name:
        return Note.E;

      case Note.E.name:
        return Note.F;

      case Note.F.name:
        return Note.F_h;
      case Note.F_h.name:
        return Note.G;

      case Note.G.name:
        return Note.G_h;
      case Note.G_h.name:
        return Note.A;

      default:
        return Note.A;
    }
  }
}
export let noteMap = new DoubleMap();
let note = Note.E;
for (let i = 0; i < 12; i++) {
  noteMap.add(note);
  note = note.next();
}

/*
let NoteToStringMap = {};
let note = Note.E;
for (let i = 0; i < 12; i++) {
  NoteToStringMap[note] = note.name;
  note = note.next();
}
let StringToNoteMap = {};

for (let i = 0; i < 12; i++) {
  StringToNoteMap[note.name] = note;
  note = note.next();
}

function getString(value) {
  return StringToNoteMap[value];
}
function getNote(value) {
  return NoteToStringMap[value];
}

export var n = {
  get: function (value) {
    const type = typeof value;
    const isArray = Array.isArray(value);
    if (type == "string") {
      return getString(value);
    } else if (type == "object") {
      if (isArray) {
        const v = value.map((e) => {
          return n.get(e);
        });
        return v;
      } else {
        return getNote(value);
      }
    }
  },
};
*/
