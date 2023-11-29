/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import FredTile from "./FredTiles/FredTile";
import styles from "../css/FretBoard.module.css";
import { useSelector } from "react-redux";
import { scaleMap } from "../classes/Scales";

export default function GuitarString({ notes, isTop, isBottom, stringNumber }) {

  const _style = isTop ? "top" : isBottom ? "bottom" : "";

  return (
    <>
      <div className={`${styles.string} ${_style}`}>
        {notes.map((note, i) => {
          const noteId = note +'_' +stringNumber + '_'+ i;
          return <FredTile key={uuid()} note={note} noteId={noteId}/>;
        })}
      </div>
    </>
  );
}
