
import "./App.css";
import FretBoard from "./components/FretBoard";
import { FredBoard } from "./classes/FredBoard";
import { FredBoardString } from "./classes/FredBoardString";
import { TuningNotes } from "./classes/TuningNotes";
import ScaleChooser from "./components/ScaleChooser";

const fretCount = 12;
const tuning = TuningNotes.NORMAL;
const strings = tuning.notes.map(
  (note) => new FredBoardString(fretCount, note)
);
const fredBoard = new FredBoard(strings);

function App() {
  return (
  <>
   <FretBoard fredBoard={fredBoard} />
   <ScaleChooser/>
  </>
  );
}


export default App;
