import React from "react";
import { standardTool } from "./_ToolBaseClass";
import { FaSquareFull } from "react-icons/fa";

export class SquareFill extends standardTool {
  arcX = 0;
  arcY = 0;
  arcSize = 0;
  start() {
    this.defineInputs();
    this.ctxRef.fillStyle = this.color;
    this.openAction();
    this.arcX = this.Axis.X;
    this.arcY = this.Axis.Y;
  }
  action() {}
  stop() {
    let squareWidth = Math.abs(this.arcX - this.Axis.X);
    let squareHeight = Math.abs(this.arcY - this.Axis.Y);
    this.ctxRef.fillRect(
      this.arcX < this.Axis.X ? this.arcX : this.arcX - squareWidth,
      this.arcY < this.Axis.Y ? this.arcY : this.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    this.closeAction();
  }
  cursorFunction() {
    if (!this.ToolActive) return;
    let squareWidth = Math.abs(this.arcX - this.Axis.X);
    let squareHeight = Math.abs(this.arcY - this.Axis.Y);
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.fillStyle = this.color;
    this.ctxRefV.beginPath();
    this.ctxRefV.fillRect(
      this.arcX < this.Axis.X ? this.arcX : this.arcX - squareWidth,
      this.arcY < this.Axis.Y ? this.arcY : this.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
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
        <FaSquareFull />
      </div>
    );
  }
}
