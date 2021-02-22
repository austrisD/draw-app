import React, { useEffect, useRef, useState } from "react";

export const DrawField = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [IsDrawing, setIsDrawing] = useState(false);
  const [MouseLoc, setMouseLoc] = useState({ XAxis: 0, YAxis: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
    // canvas.style.width = `${400}px`;
    // canvas.style.height = `${200}px`;

    const ctx = canvas.getContext("2d");
    // ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.strokeStyle = "#36393e";
    ctx.lineWidth = 5;
    ctxRef.current = ctx;
  }, []);

  const startAction = () => {
    setIsDrawing(true);
    ctxRef.current.moveTo(MouseLoc.XAxis, MouseLoc.YAxis);
    ctxRef.current.beginPath();
  };
  const stopAction = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };
  const action = () => {
    if (!IsDrawing) return;
    ctxRef.current.lineTo(MouseLoc.XAxis, MouseLoc.YAxis);
    ctxRef.current.stroke();
  };

  return (
    <canvas
      style={{ border: "1px solid #000" }}
      ref={canvasRef}
      onMouseDown={startAction}
      onMouseUp={stopAction}
      onMouseMove={(event) => {
        setMouseLoc({ XAxis: event.clientX, YAxis: event.clientY });
        action();
      }}
    />
  );
};
