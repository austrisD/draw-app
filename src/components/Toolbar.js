import React from "react";
import { GithubPicker } from "react-color";
import {
  BsPen,
  BsSquare,
  BsArrowReturnLeft,
  BsArrowReturnRight,
} from "react-icons/bs";
import { VscTextSize } from "react-icons/vsc";
import { FaSquareFull, FaRegSave } from "react-icons/fa";
import * as global from "../global/constants";
import {
  dragLine,
  Arc,
  squareFill,
  square,
  text,
  Pen,
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
            setToolbarStatus((prevState) => ({
              ...prevState,
              lineWidth: event.target.value,
            }));
            ToolbarStatus.tool.setLineWidth(event.target.value);
          }}
        />
        <p>{ToolbarStatus.lineWidth}</p>
      </div>

      <div
        className="tool"
        style={
          ToolbarStatus.tool.name === "pen"
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

      <div className="ToolSettings">
        <div
          className="text__settings"
          style={{
            display: ToolbarStatus.tool.Name === "text" ? "block" : "none",
          }}
        >
          <select
            className="text__settings__size"
            onChange={(event) => {
              // text.fontSize = event.target.value;
              setToolbarStatus((prevState) => ({
                ...prevState,
                tool: text,
              }));
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
            onChange={() => {
              setToolbarStatus((prevState) => ({
                ...prevState,
                tool: text,
              }));
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
      </div>
      {/**must change reload + add warning if change  progress lost */}

      <div>
        <button
          onClick={() => {
            console.log(typeof ToolbarStatus.tool);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
