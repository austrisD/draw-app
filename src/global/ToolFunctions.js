export const Pen = {
  Name: "pen",
  ctxRef: "",
  lineWidth: "",
  color: "",
  start: (X, Y) => {
    Object.ctxRef.moveTo(X, Y);
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "round";
    Object.ctxRef.beginPath();
  },
  action: (X, Y) => {
    Object.ctxRef.lineTo(X, Y);
    Object.ctxRef.stroke();
  },
  stop: (X, Y) => {
    Object.ctxRef.closePath();
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
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "round";
    Object.initialLocX = X;
    Object.initialLocY = Y;
    Object.ctxRef.beginPath();
    Object.ctxRef.moveTo(X, Y);
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    Object.ctxRef.lineTo(X, Y);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
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
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.beginPath();
    Object.arcX = X;
    Object.arcY = Y;
  },
  action: (X, Y) => {
    let xAxisRadius = Math.abs(Object.arcX - X);
    let yAxisRadius = Math.abs(Object.arcY - Y);
    Object.arcSize = xAxisRadius > yAxisRadius ? xAxisRadius : yAxisRadius;
  },
  stop: (X, Y) => {
    Object.ctxRef.arc(Object.arcX, Object.arcY, Object.arcSize, 0, 7);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
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
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.fillStyle = Object.color;
    Object.ctxRef.beginPath();
    Object.arcX = X;
    Object.arcY = Y;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    let squareWidth = Math.abs(Object.arcX - X);
    let squareHeight = Math.abs(Object.arcY - Y);
    Object.ctxRef.fillRect(
      Object.arcX < X ? Object.arcX : Object.arcX - squareWidth,
      Object.arcY < Y ? Object.arcY : Object.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
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
    Object.ctxRef.lineWidth = Object.lineWidth;
    Object.ctxRef.strokeStyle = Object.color;
    Object.ctxRef.lineCap = "square";
    Object.ctxRef.beginPath();
    Object.ctxRef.moveTo(X, Y);
    Object.click1X = X;
    Object.click1Y = Y;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {
    Object.ctxRef.lineTo(X, Object.click1Y);
    Object.ctxRef.lineTo(X, Y);
    Object.ctxRef.lineTo(Object.click1X, Y);
    Object.ctxRef.lineTo(Object.click1X, Object.click1Y);
    Object.ctxRef.stroke();
    Object.ctxRef.closePath();
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
  textMenu: false,
  textMenuX: null,
  textMenuY: null,
  textValue: "",
  start: (X, Y) => {
    Object.textMenuX = X;
    Object.textMenuY = Y;
    Object.textMenu = true;
  },
  action: (X, Y) => {},
  stop: (X, Y) => {},
  cursorFunction: (ctxRef, X, Y) => {},
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
//maxWidth

//more reformations needed!!!
