import React, { useState } from "react";
import "./Container.css"
// import "./";
import Board from "../Board/Board";
const Container = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  return (
    <div className="container">
      <div className="color-picker-container">
        <input
          value={selectedColor}
          type="color"
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
      <div className="board-container"> 
        <Board color={selectedColor}/>
      </div>
    </div>
  );
};
export default Container;
