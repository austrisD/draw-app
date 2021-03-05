import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const canvasRefVisual = useRef(null);
  const ctxRefVisual = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ XAxis: 0, YAxis: 0 });
  const [CoordinatesActive, setCoordinatesActive] = useState(false);

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
          ToolbarStatus.tool.start(MouseLoc.XAxis, MouseLoc.YAxis);
        }}
        onMouseMove={(event) => {
          setCoordinatesActive(true);
          setMouseLoc({
            XAxis: event.clientX - canvasRef.current.offsetLeft,
            YAxis: event.clientY - canvasRef.current.offsetTop,
          });
          if (!IsDrawing) return;
          ToolbarStatus.tool.action(MouseLoc.XAxis, MouseLoc.YAxis);
          ToolbarStatus.tool.cursorFunction(
            ctxRefVisual.current,
            MouseLoc.XAxis,
            MouseLoc.YAxis
          );
        }}
        onMouseUp={() => {
          ToolbarStatus.tool.stop(MouseLoc.XAxis, MouseLoc.YAxis);
          setIsDrawing(false);
        }}
        onMouseLeave={() => {
          setCoordinatesActive(false);
        }}
      />
      <p
        style={{
          display: CoordinatesActive ? "block" : "none",
          top: MouseLoc.YAxis - 10,
          left: MouseLoc.XAxis + 130,
        }}
        className="cursorCandidates"
      >
        {`X:${MouseLoc.XAxis}`}
        <br />
        {`Y:${MouseLoc.YAxis}`}
      </p>
      {/* <button
        onClick={() => {
          console.log(canvasRefVisual);
        }}
      >
        testa
      </button> */}
    </>
  );
};
