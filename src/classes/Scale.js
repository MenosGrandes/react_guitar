
export class Scale {
    constructor(name, notes) {
      this.name = name;
      this.notes = notes;
    }
    toString() {
      return `Scale.${this.name}`;
    }
    inside(note)
    {
        return this.notes.includes(note);
    }
  }