import React, { useEffect, useState } from "react";

import Name from "./../components/Name";
import ColorPicker from "./../components/ColorPicker";

import randomColor from "randomcolor";

export default function WebPages() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState("");

  useEffect(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        setColors(res.colors.map(color => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  }, []);

  return (
    <header style={{ borderTop: `10px solid ${activeColor}` }}>
      <div className="app">
        <Name />
      </div>
      <div style={{ marginTop: 10 }}>
        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
    </header>
  );
}
