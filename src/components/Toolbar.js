import React from "react";
import { GithubPicker } from "react-color";
import { BsPen } from "react-icons/bs";
import * as global from "../global/constants";
import { Pen, dragLine, Arc } from "../global/ToolFunctions";

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

  return (
    <div className="Toolbar">
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
      <StandardTool ClassName={"dragLine"} name={'line'} ToolFunctions={dragLine} />
      <StandardTool ClassName={"arc"} name={'circle'} ToolFunctions={Arc} />

      <div className="background"></div>

      <div>
        <button
          onClick={() => {
            console.log(ToolbarStatus);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
