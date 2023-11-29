import styles from "../../css/FretBoard.module.css";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTile, change } from "../../store/slices/tileSlice";

export default function FredTile({ note, isVisible_ByScale, noteId }) {
  const dispatch = useDispatch();
  const tile = useSelector((state) => state.tiles.tiles[noteId]);

  useEffect(() => {
    dispatch(addTile({id : noteId, value : false}));
  },[])

  const _note = ("note_" + note)
    .replace("_Note", "")
    .replace("#", "h")
    .replace(".", "_");

  function is_visible() {
    if (tile ) {
      return <div className={`${styles.tile} ${_note}`}>{note.name}</div>;
    } else {
      return (
        <div className={`${styles.tile} ${_note} ${styles.hide}`}>
          {note.name}
        </div>
      );
    }
  }
  const onClickHandler = (e) =>
  {
    e.preventDefault();
    dispatch(change({id : noteId}));
  }
  return (
    <div className={styles.guitar_tile} onClick={(e)=>{onClickHandler(e)}}>
      <div className={styles.guitar_string_part}></div>
      {is_visible()}
    </div>
  );
}
