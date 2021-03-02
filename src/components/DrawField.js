import React, { useEffect, useRef, useState } from "react";

export const DrawField = ({ ToolbarStatus, setToolbarStatus }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ XAxis: 0, YAxis: 0 });

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

  return (
    <>
      <canvas
        style={{ border: "1px solid #000", cursor: "crosshair" }}
        ref={canvasRef}
        onMouseDown={() => {
          setIsDrawing(true);
          ToolbarStatus.tool.start(
            ctxRef,
            ToolbarStatus,
            MouseLoc.XAxis,
            MouseLoc.YAxis
          );
        }}
        onMouseMove={(event) => {
          setMouseLoc({
            XAxis: event.clientX - canvasRef.current.offsetLeft,
            YAxis: event.clientY - canvasRef.current.offsetTop,
          });
          if (!IsDrawing) return;
          ToolbarStatus.tool.action(ctxRef, MouseLoc.XAxis, MouseLoc.YAxis);
        }}
        onMouseUp={() => {
          ToolbarStatus.tool.stop(ctxRef);
          setIsDrawing(false);
        }}
      />
      <button
        onClick={() => {
          setToolbarStatus((prevState) => ({
            ...prevState,
            tool: {
              ...prevState.tool,
              ctxRef: 'asdas',
            },
          }));
          console.log(ToolbarStatus.tool.ctxRef);
        }}
      >
        test
      </button>
    </>
  );
};
