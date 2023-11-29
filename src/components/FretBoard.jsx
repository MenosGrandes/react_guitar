/* eslint-disable react/prop-types */
import { v4 as uuid } from "uuid";
import styles from "../css/FretBoard.module.css";
import FretNumberContainer from "./FretNumberContainer";
import GuitarString from "./GuitarString";

export default function FretBoard({ fredBoard }) {
  const fredCount = fredBoard.strings[0].fredCount;
  const _size = fredBoard.strings.length - 1;
  return (
    <div className={styles.fret_board}>
      {fredBoard.strings.map((string, i) => (
        <GuitarString
          key={uuid()}
          notes={string.notes}
          isTop={i === 0}
          isBottom={i === _size}
          stringNumber={i}
        ></GuitarString>
      ))}
      <FretNumberContainer fretCount={fredCount + 1} />
    </div>
  );
}
