import React, { useEffect, useState } from "react";
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
            ToolbarStatus.tool.setLineWidth(event.target.value);
            setToolbarStatus((prevState) => ({
              ...prevState,
              lineWidth: event.target.value,
            }));
          }}
        />
        <p>{ToolbarStatus.lineWidth}</p>
      </div>

      <Pen setThis={setThis} />
      <DragLine setThis={setThis} />
      <Arc setThis={setThis} />
      <Square setThis={setThis} />
      <SquareFill setThis={setThis} />
      <WriteText setThis={setThis} />

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

// const StandardTool = ({ name, ClassName, ToolFunctions }) => {
//   return (
//     <div
//       className={ClassName}
//       style={
//         ToolbarStatus.tool.name === ClassName
//           ? global.ActiveBtn
//           : { borderColor: "#000" }
//       }
//       onClick={() => {
//         setToolbarStatus((prevState) => ({
//           ...prevState,
//           tool: ToolFunctions,
//         }));
//       }}
//     >
//       <p> {name}</p>
//     </div>
//   );
// };

{
  /*
      <StandardTool
        ClassName={"dragLine"}
        name={<>&#9866;</>}
        ToolFunctions={dragLine}
      />

      <StandardTool ClassName={"arc"} name={<>&#9898;</>} ToolFunctions={Arc} />

      <StandardTool
        ClassName={"squareFill"}
        name={<FaSquareFull />}
        ToolFunctions={squareFill}
      />

      <StandardTool
        ClassName={"square"}
        name={<BsSquare />}
        ToolFunctions={square}
      />

      <div
        className="text"
        style={
          ToolbarStatus.tool.name === "text"
            ? global.ActiveBtn
            : { borderColor: "#000" }
        }
        onClick={() => {
          setToolbarStatus((prevState) => ({
            ...prevState,
            tool: text,
          }));
        }}
      >
        <VscTextSize style={{ width: "25px", height: "25px" }} />
      </div>

      <div className="ToolSettings">
        <div
          className="text__settings"
          style={{
            display: ToolbarStatus.tool.name === "text" ? "block" : "none",
          }}
        >
          <select
            className="text__settings__size"
            onChange={(event) => {
              text.fontSize = parseInt(event.target.value);
            }}
          >
            <option value="8">8px</option>
            <option value="12">13px</option>
            <option value="16">16px</option>
            <option value="24">24px</option>
            <option value="32">32px</option>
            <option value="42">42px</option>
            <option value="72">72px</option>
          </select>
          <select
            className="text__settings__fontSelect"
            onChange={(event) => {
              text.fontFamily = event.target.value;
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Gill Sans">Gill Sans</option>
          </select>
        </div>
        <input
          type="text "
          className="drawFieldSize"
          placeholder="screen width"
          onChange={(event) => {
            setToolbarStatus((prevState) => ({
              ...prevState,
              canvasWidth: event.target.value,
            }));
          }}
          value={ToolbarStatus.canvasWidth}
        />
        <input
          type="text "
          className="drawFieldSize"
          placeholder="screen hight"
          onChange={(event) => {
            setToolbarStatus((prevState) => ({
              ...prevState,
              canvasHeight: event.target.value,
            }));
          }}
          value={ToolbarStatus.canvasHeight}
        />
      </div>

      <div className="Toolbar__ctrl_Z" onClick={() => {}}>
        <BsArrowReturnLeft />
      </div>

      <div className="Toolbar__ctrl_Y" onClick={() => {}}>
        <BsArrowReturnRight />
      </div> */
}
{
  /**must change reload + add warning if change  progress lost */
}
