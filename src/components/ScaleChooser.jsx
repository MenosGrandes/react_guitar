import { useDispatch, useSelector } from "react-redux";
import { allScales } from "../classes/Scales";
import { v4 as uuid } from "uuid";
import { changeTo } from "../store/slices/scaleSlice";
import { useState } from "react";

export default function ScaleChooser() {
  const scale = useSelector((state) => state.scale.scale);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    console.log(e);
    dispatch(changeTo(e.target.value));
  };
  return (
    <>
      <div>Pick Scale!</div>
      <form>
        <select
          onChange={(e) => {
            onChangeHandler(e);
          }}
          value={scale}
        >
          {allScales.map((_scale) => {
            console.log(_scale);
            return (
              <option key={uuid()} value={_scale.name}>
                {_scale.name}
              </option>
            );
          })}
        </select>
      </form>
      <div>{scale}</div>
    </>
  );
}
