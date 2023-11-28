import React from 'react'
import styles from "../css/FretBoard.module.css";

export default function FretNumber({number}) {
  return (
    <div className={styles.fret_number}>{number + 'th'}</div>
  )
}
