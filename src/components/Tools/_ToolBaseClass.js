import React from 'react';
export class standardTool extends React.Component {
  toolON = false;
  lineWidth = "5";
  color = "";
  ctxRef = null;
  ctxRefV = null;
  ToolActive = false;
  Axis = { X: 0, Y: 0 };
  ActiveBtn = { borderColor: "#1d7e8f", borderWidth: "2px" };
  inActiveBtn = { borderColor: "#000", borderWidth: "1px" };
  defineInputs() {
    if (this.ctxRef === null || this.ctxRefV === null) {
      this.ctxRef = document.getElementById("image").getContext("2d");
      this.ctxRefV = document.getElementById("overlay").getContext("2d");
    }
    this.ctxRef.lineWidth = this.lineWidth;
    this.ctxRef.strokeStyle = this.color;
  }
  openAction() {
    this.ToolActive = true;
    this.ctxRef.beginPath();
  }
  closeAction() {
    this.ToolActive = false;
    this.ctxRef.stroke();
    this.ctxRef.closePath();
  }
  setColor(color) {
    this.color = color;
  }
  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth;
  }
  clearOverlay() {
    if (this.ctxRefV == null) return;
    this.ctxRefV.clearRect(0, 0, 800, 800);
  }
  activateTool(deactivate) {
    deactivate();
    this.toolON = true;
  }
  deselect() {
    this.toolON = false;
  }
}
