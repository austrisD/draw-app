import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ XAxis: 0, YAxis: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 400;
    // canvas.style.width = `${400}px`;
    // canvas.style.height = `${200}px`;
    const ctx = canvas.getContext("2d");
    // ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.strokeStyle = ToolbarStatus.color;
    ctx.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current = ctx;
  }, []);


  return (
    <>
      <canvas
        style={{ border: "1px solid #000", cursor: "crosshair" }}
        ref={canvasRef}
        onMouseDown={() => {
          setIsDrawing(true);
          // startAction();
          ToolbarStatus.tool.start(
            ctxRef,
            ToolbarStatus,
            MouseLoc.XAxis,
            MouseLoc.YAxis
          );
        }}
        onMouseMove={(event) => {
          setMouseLoc({ XAxis: event.clientX, YAxis: event.clientY });
          if (!IsDrawing) return;
          ToolbarStatus.tool.action(ctxRef, event.clientX, event.clientY);
        }}
        onMouseUp={() => {
          ToolbarStatus.tool.stop(ctxRef);
          setIsDrawing(false);
        }}
      />
      <button
        onClick={() => {
          console.log(ToolbarStatus.tool.start);
        }}
      >
        test
      </button>
    </>
  );
};
