import React, { useState } from "react";
import "./styles.css";
const Figma = () => {
  const [heading, setHeading] = useState("2");
  const [headingColor, setHeadingColor] = useState("");
  // const [red, setRed] = useState("100");
  // const [green, setGreen] = useState("100");
  // const [blue, setBlue] = useState("100");
  const [background, setBackground] = useState("");

  const [borderThick, setBorderThick] = useState(1);

  const [borderColor, setBorderColor] = useState("#000");
  const [borderRadius, setBorderRadius] = useState(1);
  const [padding, setPadding] = useState(1);
  const [paraColor, setParaColor] = useState("");
  const [paraFont, setparaFont] = useState(10);

  // ***************function*******************
  const increaseBorder = () => {
    setBorderThick((borderThick) => borderThick + 1);
  };
  const decreaseBorder = () => {
    if (borderThick === 1) {
      setBorderThick(1);
    } else {
      setBorderThick((borderThick) => borderThick - 1);
    }
  };

  // #################radius*****************
  const increaseBorderRadius = () => {
    setBorderRadius((borderRadius) => borderRadius + 1);
  };
  const decreaseBorderRadius = () => {
    if (borderRadius <= 1) {
      setBorderRadius(0);
    } else {
      setBorderRadius((borderRadius) => borderRadius - 1);
    }
  };
  const increasePadding = () => {
    setPadding((padding) => padding + 1);
  };
  const decreasePadding = () => {
    if (padding <= 1) setPadding(0);
    else {
      setPadding((padding) => padding - 1);
    }
  };
  const setBackgroundFun = (e) => {
    setBackground(e.target.value);
  };
  const headingColorChange = (e) => {
    setHeadingColor(e.target.value);
  };
  const paraColorChange = (e) => {
    setParaColor(e.target.value);
  };
  const paraFontIncrease = () => {
    setparaFont((paraFont) => paraFont + 1);
  };
  const paraFontDecrease = () => {
    if (paraFont === 1) {
      setparaFont(1);
    } else {
      setparaFont((paraFont) => paraFont - 1);
    }
  };
  const borderColorChange = (e) => {
    setBorderColor(e.target.value)
  }

  return (
    <div className="figma-body">
              <h1>Figma Lite</h1>

      <h2>Style as you want</h2>
      <div className="figma-style">
        <div className="border-style">
          <div>
            Border: <button onClick={increaseBorder}>Increase</button>
            <button onClick={decreaseBorder}>Decrease</button>{" "}
          </div>
          <div>
            Border-radius:<strong>{` ${borderRadius}px `}</strong>
            <button onClick={increaseBorderRadius}>Increase</button>
            <button onClick={decreaseBorderRadius}>Decrease</button>
          </div>
          <div>
            Border-color: <input type="color" onChange={borderColorChange}/>

          </div>
        </div>
        <div className="padding-style">
          Padding:<strong>{` ${padding}rem `}</strong>
          <span>
            <button onClick={increasePadding}>Increase</button>
          </span>
          <span>
            <button onClick={decreasePadding}>Decrease</button>
          </span>
        </div>
        <div className="background-style">
          Background Color-
          <input type="color" onChange={setBackgroundFun} />
          {/* <br />
          <br />
          {background.map((color) => {
            return (
              <span
                style={{
                  margin: "5px",
                  backgroundColor: `${color}`,
                  padding: "0.5rem",
                  border:"1px solid black",
                  borderRadius: "5px"
                }}
                onClick={setBackgroundFun}
              >
                {color}
              </span>
            );
          })} */}
        </div>
        <div className="Heading-style">
          Heading Color: <input type="color" onChange={headingColorChange} />
        </div>
        <div className="para-style">
          ParagraphColor: <input type="color" onChange={paraColorChange} />
          {" "}Paragraph text-size: {` ${paraFont}px `}{" "}
          <button onClick={paraFontIncrease}>Increase</button>
          {` `} <button onClick={paraFontDecrease}>Decrease</button>
        </div>
      </div>
      <div
        className="figma-change-box"
        style={{
          backgroundColor: `${background}`,
          border: `${borderThick}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}rem`,
          color: `${paraColor}`
        }}
      >
        <h1
          style={{
            fontSize: `${heading}rem`,
            color: `${headingColor}`
          }}
        >
          I am heading
        </h1>
        <p
          style={{
            fontSize: `${paraFont}px`
          }}
        >
          I am paragraph, loremos benevolentiae pariter aequaliterque
          respondeat, tertiam, ut.
        </p>
      </div>
    </div>
  );
};

export default Figma;
