import { useState } from "react";
import "./styles.css";
import Header from "./Header/Header";

export default function App() {
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
    <div className="App">
      <Header />
      <p>
        rgb({color.color1},{color.color2},{color.color3})
      </p>
      <button
        style={{
          backgroundColor: `rgb(${color.color1},${color.color2},${color.color3})`
        }}
        onClick={handleClick}
      ></button>
    </div>
  );
}
