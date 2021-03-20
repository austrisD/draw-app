import { standardTool } from "./_ToolBaseClass";
import { RiSubtractLine } from "react-icons/ri";

export class DragLine extends standardTool {
  constructor() {
    super();
  }
  name = "dragLine";
  initialLoc = null;
  initialLocY = null;
  start() {
    this.defineInputs();
    this.ctxRef.lineCap = "round";
    this.initialLocX = this.Axis.X;
    this.initialLocY = this.Axis.Y;
    this.openAction();
    this.ctxRef.moveTo(this.Axis.X, this.Axis.Y);
  }
  action() {}
  stop() {
    this.ctxRef.lineTo(this.Axis.X, this.Axis.Y);
    this.closeAction();
  }
  cursorFunction() {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "round";
    this.ctxRefV.beginPath();
    this.ctxRefV.moveTo(this.initialLocX, this.initialLocY);
    this.ctxRefV.lineTo(this.Axis.X, this.Axis.Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
  render() {
    return (
      <div
        onClick={() => {
          this.toolON = this.toolON === false ? true : false;
          if (this.toolON === true) this.props.setThis(this);
        }}
        style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
      >
        <RiSubtractLine />
      </div>
    );
  }
}
