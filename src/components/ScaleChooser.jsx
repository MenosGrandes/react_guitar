import { allScales } from "../classes/Scales";
import { v4 as uuid } from "uuid";

export default function ScaleChooser() {
  console.log(allScales)
  return (
    <>
      <label>Pick Scale!</label>
      <select>
        {allScales.map((scale) => 
          <option key={uuid()} value={scale.name}>
            {scale.name}{" "}
          </option>
        )}
      </select>
    </>
  );
}
