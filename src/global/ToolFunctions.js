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
  stop: (ctxRef) => {
    ctxRef.current.closePath();
  },
  test: () => {
    console.log(this);
  },
};
