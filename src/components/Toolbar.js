import React from "react";
import { GithubPicker } from "react-color";
import { BsPen, BsSquare } from "react-icons/bs";
import { VscTextSize } from "react-icons/vsc";
import { FaSquareFull, FaRegSave } from "react-icons/fa";
import * as global from "../global/constants";
import {
  Pen,
  dragLine,
  Arc,
  squareFill,
  square,
  text,
} from "../global/ToolFunctions";

export const Toolbar = ({ setToolbarStatus, ToolbarStatus }) => {
  const StandardTool = ({ name, ClassName, ToolFunctions }) => {
    return (
      <div
        className={ClassName}
        style={
          ToolbarStatus.tool.name === ClassName
            ? global.ActiveBtn
            : { borderColor: "#000" }
        }
        onClick={() => {
          setToolbarStatus((prevState) => ({
            ...prevState,
            tool: ToolFunctions,
          }));
        }}
      >
        <p> {name}</p>
      </div>
    );
  };
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
          download("yourDrawing", "asdasd");
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
            setToolbarStatus((prevState) => ({
              ...prevState,
              lineWidth: event.target.value,
            }));
          }}
        />
        <p>{ToolbarStatus.lineWidth}</p>
      </div>

      <div
        className="tool"
        style={
          ToolbarStatus.tool.Name === "pen"
            ? global.ActiveBtn
            : { borderColor: "#000" }
        }
      >
        <BsPen
          onClick={() => {
            setToolbarStatus((prevState) => ({
              ...prevState,
              tool: Pen,
            }));
          }}
        />
      </div>
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
          ToolbarStatus.tool.Name === "text"
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

      {/* <div>
        <button
          onClick={() => {
            console.log(ToolbarStatus);
          }}
        >
          test
        </button>
      </div> */}
    </div>
  );
};

export default Toolbar;
