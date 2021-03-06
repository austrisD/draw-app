import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus, setToolbarStatus }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const canvasRefVisual = useRef(null);
  const ctxRefVisual = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ X: 0, Y: 0 });
  const [CoordinatesActive, setCoordinatesActive] = useState(false);
  const [TextToolValue, setTextToolValue] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 800;
    canvas.style.width = `${800}px`;
    canvas.style.height = `${800}px`;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = ToolbarStatus.color;
    ctx.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current = ctx;
  }, []);
  /**draw field canvas */
  useEffect(() => {
    const canvas = canvasRefVisual.current;
    canvas.width = 800;
    canvas.height = 800;
    canvas.style.width = `${800}px`;
    canvas.style.height = `${800}px`;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = ToolbarStatus.color;
    ctx.lineWidth = ToolbarStatus.lineWidth;
    ctxRefVisual.current = ctx;
  }, []);
  /**mouse tool visual */

  useEffect(() => {
    ToolbarStatus.tool.set(
      ctxRef.current,
      ToolbarStatus.lineWidth,
      ToolbarStatus.color
    );
  }, [ToolbarStatus]);

  return (
    <>
      <canvas style={{ border: "1px solid #000" }} ref={canvasRef} id="image" />
      <canvas
        className="canvasRefVisual"
        style={{
          border: "1px solid #000",
          cursor: "crosshair",
          top: 8 /**canvasRef.current.offsetTop */,
          left: 108 /**canvasRef.current.offsetLeft */,
        }}
        ref={canvasRefVisual}
        onMouseDown={() => {
          setIsDrawing(true);
          ToolbarStatus.tool.start(MouseLoc);
          if (ToolbarStatus.tool.Name === "text") {
            ToolbarStatus.tool.textMenu = true;
            ToolbarStatus.tool.textMenuY = MouseLoc.YAxis;
            ToolbarStatus.tool.textMenuX = MouseLoc.XAxis;
            //need to more this if statement to tool function!!!
          }
        }}
        onMouseMove={(event) => {
          setCoordinatesActive(true);
          setMouseLoc({
            X: event.clientX - canvasRef.current.offsetLeft,
            Y: event.clientY - canvasRef.current.offsetTop,
          });
          if (!IsDrawing) return;
          ToolbarStatus.tool.cursorFunction(ctxRefVisual.current, MouseLoc);
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

      {/** VVVVVV writing tool support window VVVVV  */}
      {/* <div
        className="textTool"
        style={{
          display: ToolbarStatus.tool.textMenu === true ? "block" : "none",
          top: ToolbarStatus.tool.textMenuY,
          left: ToolbarStatus.tool.textMenuX,
        }}
      >
        <input
          type="textarea"
          onChange={(event) => {
            setTextToolValue(event.target.value);
          }}
          value={TextToolValue}
          className="textTool__input"
          style={{
            display: ToolbarStatus.tool.textMenu === true ? "block" : "none",
            top: ToolbarStatus.tool.textMenuY,
            left: ToolbarStatus.tool.textMenuX,
            color: ToolbarStatus.color,
            fontSize: `${ToolbarStatus.lineWidth}px`,
          }}
          onKeyDown={(event) => {
            if (event.key != "Enter") return;
            ToolbarStatus.tool.lineWidth = ToolbarStatus.tool.lineWidth;
            ToolbarStatus.tool.place(TextToolValue, ToolbarStatus.color);
          }}
        />
      </div> */}
      {/**^^^^^^^^^^^^writing tool support window ^^^^^^^^  */}
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

      {/* <button
        onClick={() => {
          console.log(ToolbarStatus.tool);
        }}
      >
        testa
      </button> */}
    </>
  );
};
