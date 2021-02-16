import React, { useState } from "react";

const Figma = () => {
  const [heading, setHeading] = useState("1");
  const [red, setRed] = useState("100");
  const [green, setGreen] = useState("100");
  const [blue, setBlue] = useState("100");
  const [background, setBackground] = useState({
    red: `red`,
    green: `green`,
    blue: `blue`,
    yellow: `yellow`,
    pink: `pink`,
    white: `white`
  });
  const [borderColor, setBorderColor] = useState("#000");
  const [borderRadius, setBorderRadius] = useState("0");
  const [padding, setPadding] = useState("1");
  return (
    <div class="figma-body">
      <div
        class="figma-change-box"
        style={{
          backgroundColor: `${background.white}`,
          border: `1px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}rem`
        }}
      >
        <h1
          style={{
            fontSize: `${heading}rem`,
            color: `rgb(${red}, ${green}, ${blue})`
          }}
        >
          I am heading
        </h1>
        <p>
          I am paragraph, loremos benevolentiae pariter aequaliterque
          respondeat, tertiam, ut.
        </p>
      </div>
    </div>
  );
};

export default Figma;
