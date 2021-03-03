import React from "react";
import { GithubPicker } from "react-color";
import { BsPen } from "react-icons/bs";
import * as global from "../global/constants";
import { Pen, dragLine } from "../global/ToolFunctions";

export const Toolbar = ({ setToolbarStatus, ToolbarStatus }) => {
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

      <div
        className="dragLine"
        style={
          ToolbarStatus.tool.name === "dragLine"
            ? global.ActiveBtn
            : { borderColor: "#000" }
        }
        onClick={() => {
          setToolbarStatus((prevState) => ({
            ...prevState,
            tool: dragLine,
          }));
        }}
      >
        <p> line</p>
      </div>
      <div className="background"></div>

      <div>
        <button
          onClick={() => {
            console.log(ToolbarStatus.tool.test);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
