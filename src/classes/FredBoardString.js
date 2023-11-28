export class FredBoardString {
  constructor(fredCount, beginingNote) {
    this.fredCount = fredCount;
    this.beginingNote = beginingNote;
    this.notes = this.fillFredsWithNotes();
  }
  fillFredsWithNotes() {
    var copy_of_begining_note = this.beginingNote;
    var notes = [this.beginingNote];
    for (var i = 0; i < this.fredCount; i++) {
      notes.push(copy_of_begining_note.next());
      copy_of_begining_note = copy_of_begining_note.next();
    }
    return notes;
  }
}
