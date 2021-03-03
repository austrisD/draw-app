// export class toolbarFunctions {
//   constructor(ToolbarStatus, ctxRef) {
//     this.ToolbarStatus = ToolbarStatus;
//     this.ctxRef = ctxRef;
//   }
//   Pen(X ,Y) {
//     function start(X, Y) {
//       setIsDrawing(true);
//       this.ctxRef.current.moveTo(X, Y);
//       this.ctxRef.current.lineWidth = this.ToolbarStatus.lineWidth;
//       this.ctxRef.current.strokeStyle = this.ToolbarStatus.color;
//       this.ctxRef.current.beginPath();
//     }
//   }
// }

export const Pen = {
  Name: "pen",
  ctxRef: "",
  start: (ctxRef, ToolbarStatus, X, Y) => {
    ctxRef.current.moveTo(X, Y);
    ctxRef.current.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current.strokeStyle = ToolbarStatus.color;
    ctxRef.current.beginPath();
  },
  action: (ctxRef, X, Y) => {
    ctxRef.current.lineTo(X, Y);
    ctxRef.current.stroke();
  },
  stop: (ctxRef, X, Y) => {
    ctxRef.current.closePath();
  },
  test: () => {
    console.log(this);
  },
};

export const dragLine = {
  name: "dragLine",
  ctxRef: "",
  start: (ctxRef, ToolbarStatus, X, Y) => {
    ctxRef.current.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current.strokeStyle = ToolbarStatus.color;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(X, Y);
  },
  action: (ctxRef, X, Y) => {},
  stop: (ctxRef, X, Y) => {
    ctxRef.current.lineTo(X, Y);
    ctxRef.current.stroke();
    ctxRef.current.closePath();
  },
  test: () => {
    console.log(this);
  },
};

export const Arc = {
  name: "arc",
  ctxRef: "",
  arcX: 0,
  arcY: 0,
  arcSize: 0,
  start: (ctxRef, ToolbarStatus, X, Y) => {
    ctxRef.current.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current.strokeStyle = ToolbarStatus.color;
    ctxRef.current.beginPath();
    Object.arcX = X;
    Object.arcY = Y;
  },
  action: (ctxRef, X, Y) => {},
  stop: (ctxRef, X, Y) => {
    Object.arcSize = Math.abs(Object.arcY - Y);
    ctxRef.current.arc(Object.arcX, Object.arcY, Object.arcSize, 0, 7);
    ctxRef.current.stroke();
    ctxRef.current.closePath();
    console.log(Object.arcX);
  },
  test: () => {
    // console.log(Object);
  },
};

export const square = {
  name: "square",
  ctxRef: "",
  start: (ctxRef, ToolbarStatus, X, Y) => {
    ctxRef.current.lineWidth = ToolbarStatus.lineWidth;
    ctxRef.current.strokeStyle = ToolbarStatus.color;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(X, Y);
  },
  action: (ctxRef, X, Y) => {},
  stop: (ctxRef, X, Y) => {
    ctxRef.current.lineTo(X, Y);
    ctxRef.current.stroke();
    ctxRef.current.closePath();
  },
  test: () => {
    console.log(this);
  },
};

