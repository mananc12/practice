import React from "react";
import { useState } from "react";
function AddTask() {
  const [addVal, setAddVal] = useState([]);
  const [add, setAdd] = useState("");
  const handleClick = () => {
    const arr = [];
    arr.push(add);
    setAddVal((prev) => [...prev, add]);
  };
  return (
    <>
      <ul>
        {addVal.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          name="text"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}

export default AddTask;
