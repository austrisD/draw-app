import React from "react";
import { standardTool } from "./_ToolBaseClass";
import { BsSquare } from "react-icons/bs";

export  class Square extends standardTool {
  constructor() {
    super();
  }
  click1X = null;
  click1Y = null;
  start() {
    this.defineInputs();
    this.ctxRef.lineCap = "square";
    this.openAction();
    this.ctxRef.moveTo(this.Axis.X, this.Axis.Y);
    this.click1X = this.Axis.X;
    this.click1Y = this.Axis.Y;
  }
  action() {}
  stop() {
    this.ctxRef.lineTo(this.Axis.X, this.click1Y);
    this.ctxRef.lineTo(this.Axis.X, this.Axis.Y);
    this.ctxRef.lineTo(this.click1X, this.Axis.Y);
    this.ctxRef.lineTo(this.click1X, this.click1Y);
    this.ctxRef.stroke();
    this.closeAction();
  }
  cursorFunction() {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "square";
    this.ctxRefV.beginPath();
    this.ctxRefV.moveTo(this.click1X, this.click1Y);
    this.ctxRefV.lineTo(this.Axis.X, this.click1Y);
    this.ctxRefV.lineTo(this.Axis.X, this.Axis.Y);
    this.ctxRefV.lineTo(this.click1X, this.Axis.Y);
    this.ctxRefV.lineTo(this.click1X, this.click1Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
  render() {
    return (
      <div
        onClick={() => {
          this.toolON = true;
          if (this.toolON === true) this.props.setThis(this);
        }}
        className="tool"
        style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
      >
        <BsSquare />
      </div>
    );
  }
}
