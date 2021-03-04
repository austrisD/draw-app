export const Pen = {
  Name: "pen",
  ctxRef: "",
  lineWidth: "",
  color: "",
  start: (X, Y) => {
    Object.ctxRef.current.moveTo(X, Y);
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.strokeStyle = Object.color;
    Object.ctxRef.current.lineCap = "round";
    Object.ctxRef.current.beginPath();
  },
  action: (X, Y) => {
    Object.ctxRef.current.lineTo(X, Y);
    Object.ctxRef.current.stroke();
  },
  stop: (X, Y) => {
    Object.ctxRef.current.closePath();
  },
  cursorFunction: (ctxRef, X, Y) => {},

  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};
/*******************************************************************/
export const dragLine = {
  name: "dragLine",
  ctxRef: "",
  lineWidth: "",
  color: "",
  initialLocX: null,
  initialLocY: null,
  start: (X, Y) => {
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.strokeStyle = Object.color;
    Object.ctxRef.current.lineCap = "round";
    Object.initialLocX = X;
    Object.initialLocY = Y;
    Object.ctxRef.current.beginPath();
    Object.ctxRef.current.moveTo(X, Y);
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    Object.ctxRef.current.lineTo(X, Y);
    Object.ctxRef.current.stroke();
    Object.ctxRef.current.closePath();
  },
  cursorFunction: (ctxRef, X, Y) => {
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.strokeStyle = Object.color;
    ctxRef.lineCap = "round";
    ctxRef.beginPath();
    ctxRef.moveTo(Object.initialLocX, Object.initialLocY);
    ctxRef.lineTo(X, Y);
    ctxRef.stroke();
    ctxRef.closePath();
  },
  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};
/*******************************************************************/
export const Arc = {
  name: "arc",
  ctxRef: "",
  lineWidth: "",
  color: "",
  arcX: 0,
  arcY: 0,
  arcSize: 0,
  test: () => {
    console.log("works");
  },
  start: (X, Y) => {
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.strokeStyle = Object.color;
    Object.ctxRef.current.beginPath();
    Object.arcX = X;
    Object.arcY = Y;
  },
  action: (X, Y) => {
    Object.arcSize = Math.abs(Object.arcY - Y);
  },
  stop: (X, Y) => {
    Object.ctxRef.current.arc(Object.arcX, Object.arcY, Object.arcSize, 0, 7);
    Object.ctxRef.current.stroke();
    Object.ctxRef.current.closePath();
  },
  cursorFunction: (ctxRef, X, Y) => {
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.strokeStyle = Object.color;
    ctxRef.beginPath();
    ctxRef.arc(Object.arcX, Object.arcY, Object.arcSize, 0, 7);
    ctxRef.stroke();
    ctxRef.closePath();
    // Object.test();
  },
  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};
//arc size must by calculated by bout axis   add arcRadiusDisplay length
/*******************************************************************/
export const squareFill = {
  name: "squareFill",
  ctxRef: "",
  lineWidth: "",
  color: "",
  arcX: 0,
  arcY: 0,
  arcSize: 0,
  start: (X, Y) => {
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.fillStyle = Object.color;
    Object.ctxRef.current.beginPath();
    Object.arcX = X;
    Object.arcY = Y;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    let squareWidth = Math.abs(Object.arcX - X);
    let squareHeight = Math.abs(Object.arcY - Y);
    Object.ctxRef.current.fillRect(
      Object.arcX < X ? Object.arcX : Object.arcX - squareWidth,
      Object.arcY < Y ? Object.arcY : Object.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    Object.ctxRef.current.stroke();
    Object.ctxRef.current.closePath();
  },
  cursorFunction: (ctxRef, X, Y) => {
    let squareWidth = Math.abs(Object.arcX - X);
    let squareHeight = Math.abs(Object.arcY - Y);
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.fillStyle = Object.color;
    ctxRef.beginPath();
    ctxRef.fillRect(
      Object.arcX < X ? Object.arcX : Object.arcX - squareWidth,
      Object.arcY < Y ? Object.arcY : Object.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    ctxRef.stroke();
    ctxRef.closePath();
  },

  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};
/*******************************************************************/
export const square = {
  name: "square",
  ctxRef: "",
  lineWidth: "",
  color: "",
  click1X: null,
  click1Y: null,
  start: (X, Y) => {
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.strokeStyle = Object.color;
    Object.ctxRef.current.lineCap = "square";
    Object.ctxRef.current.beginPath();
    Object.ctxRef.current.moveTo(X, Y);
    Object.click1X = X;
    Object.click1Y = Y;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    Object.ctxRef.current.lineTo(X, Object.click1Y);
    Object.ctxRef.current.lineTo(X, Y);
    Object.ctxRef.current.lineTo(Object.click1X, Y);
    Object.ctxRef.current.lineTo(Object.click1X, Object.click1Y);
    Object.ctxRef.current.stroke();
    Object.ctxRef.current.closePath();
  },
  cursorFunction: (ctxRef, X, Y) => {
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.strokeStyle = Object.color;
    ctxRef.lineCap = "square";
    ctxRef.beginPath();
    ctxRef.moveTo(Object.click1X, Object.click1Y);
    ctxRef.lineTo(X, Object.click1Y);
    ctxRef.lineTo(X, Y);
    ctxRef.lineTo(Object.click1X, Y);
    ctxRef.lineTo(Object.click1X, Object.click1Y);
    ctxRef.stroke();
    ctxRef.closePath();
  },
  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};

/********************************************************* */

export const text = {
  Name: "text",
  ctxRef: "",
  lineWidth: "",
  color: "",
  start: (X, Y) => {
    Object.ctxRef.current.lineWidth = Object.lineWidth;
    Object.ctxRef.current.strokeStyle = Object.color;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {},
  cursorFunction: (ctxRef, X, Y) => {},
  set: (ctxRef, lineWidth, color) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
  },
};

//more reformations needed!!!
