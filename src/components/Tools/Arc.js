import React from "react";
import { standardTool } from "./_ToolBaseClass";
import { BsCircle } from "react-icons/bs";

export class Arc extends standardTool {
  constructor() {
    super();
  }
  arcX = 0;
  arcY = 0;
  arcSize = 0;
  start() {
    this.defineInputs();
    this.ctxRef.lineCap = "round";
    this.openAction();
    this.arcX = this.Axis.X;
    this.arcY = this.Axis.Y;
  }
  action() {
    if (!this.ToolActive) return;
    let xAxisRadius = Math.abs(this.arcX - this.Axis.X);
    let yAxisRadius = Math.abs(this.arcY - this.Axis.Y);
    this.arcSize = xAxisRadius > yAxisRadius ? xAxisRadius : yAxisRadius;
  }
  stop() {
    this.ctxRef.arc(this.arcX, this.arcY, this.arcSize, 0, 7);
    this.ctxRef.stroke();
    this.closeAction();
  }
  cursorFunction() {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.beginPath();
    this.ctxRefV.arc(this.arcX, this.arcY, this.arcSize, 0, 7);
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
        className="tool"
        style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
      >
        <BsCircle />
      </div>
    );
  }
}
//clear on mouse realise visual canvas
