import styles from "../../css/FretBoard.module.css";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTile, change_oposite, change_to } from "../../store/slices/tileSlice";
import { scaleMap } from "../../classes/Scales";

export default function FredTile({ note, noteId }) {
  const dispatch = useDispatch();
  const tile = useSelector((state) => state.tiles.tiles[noteId]);
  const scale = useSelector((state) => state.scale.scale);
  const isVisible_ByScale = scaleMap.get(scale).inside(note);
  
  useEffect(() => {
    dispatch(addTile({id : noteId, value : false}));
  },[])
  useEffect(() => {
    dispatch(change_to({id : noteId, value : isVisible_ByScale}));
  },[scale])
  const _note = ("note_" + note)
    .replace("_Note", "")
    .replace("#", "h")
    .replace(".", "_");

  function is_visible() {
    if (tile) {
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
    dispatch(change_oposite({id : noteId}));
  }
  return (
    <div className={styles.guitar_tile} onClick={(e)=>{onClickHandler(e)}}>
      <div className={styles.guitar_string_part}></div>
      {is_visible()}
    </div>
  );
}
