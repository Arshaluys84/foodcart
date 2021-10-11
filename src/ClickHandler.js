import React, { useState } from "react";

const ClickHandler = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          backgroundColor: count % 3 === 0 && count !== 0 ? "red" : "grey",
        }}
      >
        Click me
      </button>
      {count} 
      <p>Button will be red in every third click</p>
    </div>
  );
};

export default ClickHandler;
