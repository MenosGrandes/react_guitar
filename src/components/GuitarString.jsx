/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import FredTile from "./FredTiles/FredTile";
import styles from "../css/FretBoard.module.css";

export default function GuitarString({ notes, isTop, isBottom }) {
  const _style = isTop ? "top" : isBottom ? "bottom" : "";

  return (
    <>
      <div className={`${styles.string} ${_style}`}>
        {notes.map((note) => (
          <FredTile key={uuid()} note={note} />
        ))}
      </div>
    </>
  );
}
