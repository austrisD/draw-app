import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus, setToolbarStatus }) => {
  const canvasRef = useRef(null);
  const canvasRefV = useRef(null);

  const [MouseLoc, setMouseLoc] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasV = canvasRefV.current;

    canvas.width = ToolbarStatus.canvasWidth;
    canvas.height = ToolbarStatus.canvasHeight;

    canvasV.width = ToolbarStatus.canvasWidth;
    canvasV.height = ToolbarStatus.canvasHeight;

    canvas.style.width = ToolbarStatus.canvasWidth + "px";
    canvas.style.height = ToolbarStatus.canvasHeight + "px";

    canvasV.style.width = ToolbarStatus.canvasWidth + "px";
    canvasV.style.height = ToolbarStatus.canvasHeight + "px";
  }, []);
  /**draw field canvas */


  return (
    <>
      <div
        className="drawAreaWarper"
        style={{
          width: ToolbarStatus.canvasWidth,
        }}
      >
        <canvas
          style={{ border: "1px solid #000" }}
          id="image"
          ref={canvasRef}
        />
        <canvas
          className="canvasRefVisual"
          id="overlay"
          style={{
            border: "1px solid #000",
            cursor: "crosshair",
            top: 8 + "px" /**canvasRef.current.offsetTop */,
            left: 108 + "px" /**canvasRef.current.offsetLeft */,
          }}
          ref={canvasRefV}
          onMouseDown={() => {
            ToolbarStatus.tool.start();
          }}
          onMouseMove={(event) => {
            ToolbarStatus.tool.Axis = MouseLoc;
            setMouseLoc({
              X: event.clientX - canvasRefV.current.offsetLeft,
              Y: event.clientY - canvasRefV.current.offsetTop,
            });

            ToolbarStatus.tool.cursorFunction();
            ToolbarStatus.tool.action();
          }}
          onMouseUp={() => {
            ToolbarStatus.tool.stop();
          }}
          onMouseLeave={() => {}}
        />
      </div>

      {/*cursor coordinates must by optional*/}
      <button
        onClick={() => {
          console.log(ToolbarStatus);
        }}
      >
        drawField
      </button>
    </>
  );
};
