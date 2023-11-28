import React from 'react'
import FretNumber from './FretNumber'
import styles from "../css/FretBoard.module.css";
import { v4 as uuid } from "uuid";

export default function FretNumberContainer({fretCount}) {
  return (
    <div className={ styles.fret_number_container } >
    {Array(fretCount)
      .fill(0)
      .map((_, i) => (
        <FretNumber number={i} key={uuid()}/>
      ))}
  </div>
    
  )
}
