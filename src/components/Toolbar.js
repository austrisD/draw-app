import React from "react";
import { GithubPicker } from "react-color";
import { FaRegSave } from "react-icons/fa";
// import { activeToolsControl } from "./Tools/_ToolControl";

import { DragLine } from "./Tools/DragLine";
import { Pen } from "./Tools/pen";
import { Arc } from "./Tools/Arc";
import { Square } from "./Tools/Square";
import { SquareFill } from "./Tools/SquareFill";
import { WriteText } from "./Tools/WriteText";

export const Toolbar = ({ setToolbarStatus, ToolbarStatus }) => {
  function setThis(thisTool) {
    setToolbarStatus((prevState) => ({
      ...prevState,
      tool: thisTool,
    }));
  }

  function download() {
    const canvasId = document.getElementById("image");
    // const img = canvasId.toDataURL("image/png");
    // document.write('<img src="' + img + '"/>');
    const link = document.createElement("a");
    link.download = "filename.png";
    link.href = canvasId.toDataURL();
    link.click();
  }

  return (
    <div className="Toolbar">
      <div
        onClick={() => {
          download();
        }}
      >
        <FaRegSave />
      </div>

      <div className="colorPicker" style={{ background: ToolbarStatus.color }}>
        <div className="colorPickerHover">
          <GithubPicker
            onChange={(color) => {
              setToolbarStatus((prevState) => ({
                ...prevState,
                color: color.hex,
              }));
              ToolbarStatus.tool.setColor(color.hex);
            }}
          />
        </div>
      </div>

      <div className="lineWidth">
        <input
          type="range"
          className="rangerBar"
          min="1"
          max="50"
          value={ToolbarStatus.lineWidth}
          onChange={(event) => {
            ToolbarStatus.tool.setLineWidth(parseInt(event.target.value));
            setToolbarStatus((prevState) => ({
              ...prevState,
              lineWidth: parseInt(event.target.value),
            }));
          }}
        />
        <p>{ToolbarStatus.lineWidth}</p>
      </div>

      <Pen setThis={setThis} activeTool={ToolbarStatus.tool} />
      <DragLine setThis={setThis} activeTool={ToolbarStatus.tool} />
      <Arc setThis={setThis} activeTool={ToolbarStatus.tool} />
      <Square setThis={setThis} activeTool={ToolbarStatus.tool} />
      <SquareFill setThis={setThis} activeTool={ToolbarStatus.tool} />
      <WriteText setThis={setThis} activeTool={ToolbarStatus.tool} />

      <div>
        <button
          onClick={() => {
            console.log();
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
