import React from "react";
import { standardTool } from "./_ToolBaseClass";
import { BsPen } from "react-icons/bs";

export class Pen extends standardTool {
  toolON = true;
  start() {
    this.defineInputs();
    this.openAction();
    this.ctxRef.lineWidth = this.lineWidth;
    this.ctxRef.strokeStyle = this.color;
    this.ctxRef.moveTo(this.Axis.X, this.Axis.Y);
  }
  action() {
    if (this.ToolActive === false) return;
    this.ctxRef.stroke();
    this.ctxRef.lineTo(this.Axis.X, this.Axis.Y);
    // tool draws with line or cross fix it or square
  }
  stop() {
    this.closeAction();
  }
  cursorFunction() {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "round";
    this.ctxRefV.moveTo(this.Axis.X, this.Axis.Y);
    this.ctxRefV.beginPath();
    this.ctxRefV.lineTo(this.Axis.X, this.Axis.Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
  render() {
    return (
      <div
        onClick={() => {
          this.toolON = true;
          this.props.setThis(this);
        }}
        className="tool"
        style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
      >
        <BsPen />
      </div>
    );
  }
}
