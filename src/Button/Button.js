import React from "react";
import { useState } from "react";
import "./style.css";

export default function Button() {
  const [color, setColor] = useState({
    color1: 193,
    color2: 125,
    color3: 184
  });

  const randomGenerator = () => {
    return Math.floor(Math.random() * 255);
  };

  const handleClick = () => {
    setColor({
      color1: randomGenerator(),
      color2: randomGenerator(),
      color3: randomGenerator()
    });
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: `rgb(${color.color1},${color.color2},${color.color3})`
        }}
        onClick={handleClick}
      ></button>
      <p>
        rgb({color.color1},{color.color2},{color.color3})
      </p>
    </div>
  );
}
