import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, SetTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const RandomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const HandleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const HandleCreateRandomRgbColor = () => {
    const r = RandomUtility(256);
    const g = RandomUtility(256);
    const b = RandomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  };

  useEffect(()=>{
    if (typeOfColor==='rgb') HandleCreateRandomRgbColor()
        else HandleCreateRandomHexColor();
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => SetTypeOfColor("hex")}>Hex Color</button>
      <button onClick={() => SetTypeOfColor("rgb")}>RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => HandleCreateRandomHexColor()
            : () => HandleCreateRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RgbColor" : "HexColor"}</h3>
        <h1>{color}</h1>
        <img
          src="https://ih1.redbubble.net/image.4964964197.2169/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          alt="Loading..."
          style={{
            width: '200px',
          }}
        />
      </div>
    </div>
  );
};

export default RandomColor;
