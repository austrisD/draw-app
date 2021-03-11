import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus, setToolbarStatus }) => {
  const canvasRef = useRef(null);
  const canvasRefV = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ X: 0, Y: 0 });
  const [CoordinatesActive, setCoordinatesActive] = useState(false);

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

  useEffect(() => {
    console.log("changes in tool");
    ///refresh tool settings
  }, [ToolbarStatus.tool.color, ToolbarStatus.tool.lineWidth]);

  return (
    <>
      <canvas style={{ border: "1px solid #000" }} id="image" ref={canvasRef} />
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
          setIsDrawing(true);
          ToolbarStatus.tool.start(MouseLoc);
        }}
        onMouseMove={(event) => {
          setCoordinatesActive(true);
          setMouseLoc({
            X: event.clientX - canvasRefV.current.offsetLeft,
            Y: event.clientY - canvasRefV.current.offsetTop,
          });

          if (!IsDrawing) return;
          ToolbarStatus.tool.cursorFunction(MouseLoc);
          //must create cursor function before,for some tools
          ToolbarStatus.tool.action(MouseLoc);
        }}
        onMouseUp={() => {
          ToolbarStatus.tool.stop(MouseLoc);
          setIsDrawing(false);
        }}
        onMouseLeave={() => {
          setCoordinatesActive(false);
        }}
      />
      <p
        style={{
          display: CoordinatesActive ? "block" : "none",
          top: MouseLoc.Y - 10,
          left: MouseLoc.X + 130,
        }}
        className="cursorCandidates"
      >
        {`X:${MouseLoc.X}`}
        <br />
        {`Y:${MouseLoc.Y}`}
      </p>
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
