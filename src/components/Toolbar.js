import React from "react";
import { GithubPicker } from "react-color";
import { BsPen } from "react-icons/bs";
import * as global from "../global/constants";
import { Pen } from "../global/ToolFunctions";

export const Toolbar = ({ setToolbarStatus, ToolbarStatus }) => {
  return (
    <div className="Toolbar">
      <div className="colorPicker" style={{ background: ToolbarStatus.color }}>
        <div className="colorPickerHover">
          <GithubPicker
            onChange={(color) => {
              setToolbarStatus({
                color: color.hex,
                lineWidth: ToolbarStatus.lineWidth,
                tool: ToolbarStatus.tool,
              });
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
          onClick={(color) => {
            setToolbarStatus({
              color: color.hex,
              lineWidth: ToolbarStatus.lineWidth,
              tool: Pen,
            });
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
            setToolbarStatus({
              color: ToolbarStatus.color,
              lineWidth: event.target.value,
              tool: ToolbarStatus.tool,
            });
          }}
        />
        <p>{ToolbarStatus.lineWidth}</p>
      </div>

      <div
        className="dragLine"
        style={
          ToolbarStatus.tool === "dragLine"
            ? global.ActiveBtn
            : { borderColor: "#000" }
        }
        onClick={() => {
          setToolbarStatus({
            color: ToolbarStatus.color,
            lineWidth: ToolbarStatus.lineWidth,
            tool: "",
          });
        }}
      >
        <p> line</p>
      </div>
      <div className="background"></div>

      <div>
        <button
          onClick={() => {
            console.log(ToolbarStatus.tool);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
