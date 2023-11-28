import styles from "../../css/FretBoard.module.css";
import "../../App.css";
import { useState } from "react";

export default function FredTile({ note, scale }) {
  const _note = ("note_" + note)
    .replace("_Note", "")
    .replace("#", "h")
    .replace(".", "_");
  function is_visible() {
    const isVisible = scale.inside(note);
    if (isVisible) {
      return <div className={`${styles.tile} ${_note}`}>{note.name}</div>;
    } else {
      return (
        <div className={`${styles.tile} ${_note} ${styles.hide}`}>
          {note.name}
        </div>
      );
    }
  }
  return (
    <div className={styles.guitar_tile}>
      <div className={styles.guitar_string_part}></div>
      {is_visible()}
    </div>
  );
}
