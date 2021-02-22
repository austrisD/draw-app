import React, { useState } from "react";
import { GithubPicker } from "react-color";
import { BsPen } from "react-icons/bs";

export const Toolbar = () => {
    const [ColorPicker, setColorPicker] = useState("#000000");

  const handleChange = (color, event) => {
    console.log(color.hex);
    console.log("<br>");
    console.log(event);
    setColorPicker(color.hex);
  };
  return (
    <div className="Toolbar">
      <div className="colorPicker" style={{ background: ColorPicker }}>
        <div className="colorPickerHover">
          <GithubPicker
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
      </div>
      <div className="tool" >
        <BsPen  />
      </div>
    </div>
  );
};

export default Toolbar;
