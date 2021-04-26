import React from "react";
import { useState } from "react";
import "./style.css";
import dices from "./dices.svg";

export default function Button() {
  const [color, setColor] = useState({
    red: 193,
    green: 125,
    blue: 184
  });

  const randomGenerator = () => {
    return Math.floor(Math.random() * 256);
  };

  const handleClick = () => {
    setColor({
      red: randomGenerator(),
      green: randomGenerator(),
      blue: randomGenerator()
    });
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`
        }}
        onClick={handleClick}
      >
        Click me!
      </button>
      <p>
        <img src={dices} alt="random" />
        rgb({color.red},{color.green},{color.blue})
      </p>
    </div>
  );
}
