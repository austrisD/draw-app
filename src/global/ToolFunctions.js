export const Pen = {
  Name: "pen",
  ctxRef: "",
  lineWidth: "",
  color: "",
  start: (Axis) => {
    Object.ctxRef.moveTo(Axis.X, Axis.Y);
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "round";
    Object.ctxRef.beginPath();
  },
  action: (Axis) => {
    Object.ctxRef.lineTo(Axis.X, Axis.Y);
    Object.ctxRef.stroke();
    console.log(Axis);
  },
  stop: (Axis) => {
    Object.ctxRef.closePath();
  },
  cursorFunction: (ctxRef, Axis) => {},

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
  start: (Axis) => {
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "round";
    Object.initialLocX = Axis.X;
    Object.initialLocY = Axis.Y;
    Object.ctxRef.beginPath();
    Object.ctxRef.moveTo(Axis.X, Axis.Y);
  },
  action: (Axis) => {},
  stop: (Axis) => {
    Object.ctxRef.lineTo(Axis.X, Axis.Y);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
  },
  cursorFunction: (ctxRef, Axis) => {
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.strokeStyle = Object.color;
    ctxRef.lineCap = "round";
    ctxRef.beginPath();
    ctxRef.moveTo(Object.initialLocX, Object.initialLocY);
    ctxRef.lineTo(Axis.X, Axis.Y);
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
  start: (Axis) => {
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "round";
    Object.ctxRef.beginPath();
    Object.arcX = Axis.X;
    Object.arcY = Axis.Y;
  },
  action: (Axis) => {
    let xAxisRadius = Math.abs(Object.arcX - Axis.X);
    let yAxisRadius = Math.abs(Object.arcY - Axis.Y);
    Object.arcSize = xAxisRadius > yAxisRadius ? xAxisRadius : yAxisRadius;
  },
  stop: (Axis) => {
    Object.ctxRef.arc(Object.arcX, Object.arcY, Object.arcSize, 0, 7);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
  },
  cursorFunction: (ctxRef, Axis) => {
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
/*******************************************************************/
export const squareFill = {
  name: "squareFill",
  ctxRef: "",
  lineWidth: "",
  color: "",
  arcX: 0,
  arcY: 0,
  arcSize: 0,
  start: (Axis) => {
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.fillStyle = Object.color;
    Object.ctxRef.beginPath();
    Object.arcX = Axis.X;
    Object.arcY = Axis.Y;
  },
  action: (Axis) => {},
  stop: (Axis) => {
    let squareWidth = Math.abs(Object.arcX - Axis.X);
    let squareHeight = Math.abs(Object.arcY - Axis.Y);
    Object.ctxRef.fillRect(
      Object.arcX < Axis.X ? Object.arcX : Object.arcX - squareWidth,
      Object.arcY < Axis.Y ? Object.arcY : Object.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
  },
  cursorFunction: (ctxRef, Axis) => {
    let squareWidth = Math.abs(Object.arcX - Axis.X);
    let squareHeight = Math.abs(Object.arcY - Axis.Y);
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.fillStyle = Object.color;
    ctxRef.beginPath();
    ctxRef.fillRect(
      Object.arcX < Axis.X ? Object.arcX : Object.arcX - squareWidth,
      Object.arcY < Axis.Y ? Object.arcY : Object.arcY - squareHeight,
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
  start: (Axis) => {
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "square";
    Object.ctxRef.beginPath();
    Object.ctxRef.moveTo(Axis.X, Axis.Y);
    Object.click1X = Axis.X;
    Object.click1Y = Axis.Y;
  },
  action: (Axis) => {},
  stop: (Axis) => {
    Object.ctxRef.lineTo(Axis.X, Object.click1Y);
    Object.ctxRef.lineTo(Axis.X, Axis.Y);
    Object.ctxRef.lineTo(Object.click1X, Axis.Y);
    Object.ctxRef.lineTo(Object.click1X, Object.click1Y);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
  },
  cursorFunction: (ctxRef, Axis) => {
    ctxRef.clearRect(0, 0, 800, 800);
    ctxRef.lineWidth = Object.lineWidth;
    ctxRef.strokeStyle = Object.color;
    ctxRef.lineCap = "square";
    ctxRef.beginPath();
    ctxRef.moveTo(Object.click1X, Object.click1Y);
    ctxRef.lineTo(Axis.X, Object.click1Y);
    ctxRef.lineTo(Axis.X, Axis.Y);
    ctxRef.lineTo(Object.click1X, Axis.Y);
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
  textMenu: false,
  textMenuX: null,
  textMenuY: null,
  textValue: "",
  start: (Axis) => {
    Object.textMenuX = Axis.X;
    Object.textMenuY = Axis.Y;
    Object.textMenu = true;
  },
  action: (Axis) => {},
  stop: (Axis) => {},
  cursorFunction: (ctxRef, Axis) => {},
  place: (TextToolValue, color) => {
    Object.ctxRef.font = `${Object.lineWidth}px Arial`;
    Object.ctxRef.fillStyle = color;
    console.log(color);
    Object.ctxRef.fillText(TextToolValue, Object.textMenuX, Object.textMenuY);
  },
  set: (ctxRef, lineWidth, color, textMenu) => {
    Object.ctxRef = ctxRef;
    Object.lineWidth = lineWidth;
    Object.color = color;
    Object.textMenu = textMenu;
  },
};
//maxWidth , placement adjust,  font picker  ,eases of use,drag

//more reformations needed!!!
