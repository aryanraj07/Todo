import React, { useState } from "react";


const Count = () => {
  const [count, setCOunt] = useState(0);
  return (
    <div>
      <h2>The value of count is {count}</h2>
      <button
        onClick={() => {
          setCOunt(count + 1);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default Count;
