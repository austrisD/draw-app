import { createElement } from "react";

class standardTool {
  lineWidth = "5";
  color = "";
  ctxRef = null;
  ctxRefV = null;
  ToolActive = false;
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
  ToolActive() {}
}

class createPen extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  name = this.name;
  start(Axis) {
    this.defineInputs();
    this.openAction();
    this.ctxRef.lineWidth = this.lineWidth;
    this.ctxRef.strokeStyle = this.color;
    this.ctxRef.moveTo(Axis.X, Axis.Y);
  }
  action(Axis) {
    if (this.ToolActive === false) return;
    this.ctxRef.lineTo(Axis.X, Axis.Y);
    this.ctxRef.stroke();
  }
  stop() {
    this.closeAction();
  }
  cursorFunction(Axis) {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "round";
    this.ctxRefV.moveTo(Axis.X, Axis.Y);
    this.ctxRefV.beginPath();
    this.ctxRefV.lineTo(Axis.X, Axis.Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
}
export const Pen = new createPen("pen");
/*******************************************************************************************/

class createDragLine extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  name = this.name;
  initialLoc = null;
  initialLocY = null;
  start(Axis) {
    this.defineInputs();
    this.ctxRef.lineCap = "round";
    this.initialLocX = Axis.X;
    this.initialLocY = Axis.Y;
    this.openAction();
    this.ctxRef.moveTo(Axis.X, Axis.Y);
  }
  action(Axis) {}
  stop(Axis) {
    this.ctxRef.lineTo(Axis.X, Axis.Y);
    this.closeAction();
  }
  cursorFunction(Axis) {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "round";
    this.ctxRefV.beginPath();
    this.ctxRefV.moveTo(this.initialLocX, this.initialLocY);
    this.ctxRefV.lineTo(Axis.X, Axis.Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
}
export const dragLine = new createDragLine("dragLine");
/*****************************************************************************************/
class createArc extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  name = this.name;
  arcX = 0;
  arcY = 0;
  arcSize = 0;
  start(Axis) {
    this.defineInputs();
    this.ctxRef.lineCap = "round";
    this.openAction();
    this.arcX = Axis.X;
    this.arcY = Axis.Y;
  }
  action(Axis) {
    if (!this.ToolActive) return;
    let xAxisRadius = Math.abs(this.arcX - Axis.X);
    let yAxisRadius = Math.abs(this.arcY - Axis.Y);
    this.arcSize = xAxisRadius > yAxisRadius ? xAxisRadius : yAxisRadius;
  }
  stop(Axis) {
    this.ctxRef.arc(this.arcX, this.arcY, this.arcSize, 0, 7);
    this.ctxRef.stroke();
    this.closeAction();
  }
  cursorFunction(Axis) {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.beginPath();
    this.ctxRefV.arc(this.arcX, this.arcY, this.arcSize, 0, 7);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
}
export const Arc = new createArc("arc");
//clear on mouse realise visual canvas
/**********************************************************************************************/
class createSquareFill extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  arcX = 0;
  arcY = 0;
  arcSize = 0;
  start(Axis) {
    this.defineInputs();
    this.ctxRef.fillStyle = this.color;
    this.openAction();
    this.arcX = Axis.X;
    this.arcY = Axis.Y;
  }
  action(Axis) {}
  stop(Axis) {
    let squareWidth = Math.abs(this.arcX - Axis.X);
    let squareHeight = Math.abs(this.arcY - Axis.Y);
    this.ctxRef.fillRect(
      this.arcX < Axis.X ? this.arcX : this.arcX - squareWidth,
      this.arcY < Axis.Y ? this.arcY : this.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    this.closeAction();
  }
  cursorFunction(Axis) {
    if (!this.ToolActive) return;
    let squareWidth = Math.abs(this.arcX - Axis.X);
    let squareHeight = Math.abs(this.arcY - Axis.Y);
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.fillStyle = this.color;
    this.ctxRefV.beginPath();
    this.ctxRefV.fillRect(
      this.arcX < Axis.X ? this.arcX : this.arcX - squareWidth,
      this.arcY < Axis.Y ? this.arcY : this.arcY - squareHeight,
      squareWidth,
      squareHeight
    );
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
}
export const squareFill = new createSquareFill("squareFill");
/*****************************************************************************************/
class createSquare extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  click1X = null;
  click1Y = null;
  start(Axis) {
    this.defineInputs();
    this.ctxRef.lineCap = "square";
    this.openAction();
    this.ctxRef.moveTo(Axis.X, Axis.Y);
    this.click1X = Axis.X;
    this.click1Y = Axis.Y;
  }
  action(Axis) {}
  stop(Axis) {
    this.ctxRef.lineTo(Axis.X, this.click1Y);
    this.ctxRef.lineTo(Axis.X, Axis.Y);
    this.ctxRef.lineTo(this.click1X, Axis.Y);
    this.ctxRef.lineTo(this.click1X, this.click1Y);
    this.ctxRef.stroke();
    this.closeAction();
  }
  cursorFunction(Axis) {
    if (!this.ToolActive) return;
    this.clearOverlay();
    this.ctxRefV.lineWidth = this.lineWidth;
    this.ctxRefV.strokeStyle = this.color;
    this.ctxRefV.lineCap = "square";
    this.ctxRefV.beginPath();
    this.ctxRefV.moveTo(this.click1X, this.click1Y);
    this.ctxRefV.lineTo(Axis.X, this.click1Y);
    this.ctxRefV.lineTo(Axis.X, Axis.Y);
    this.ctxRefV.lineTo(this.click1X, Axis.Y);
    this.ctxRefV.lineTo(this.click1X, this.click1Y);
    this.ctxRefV.stroke();
    this.ctxRefV.closePath();
  }
}
export const square = new createSquare("square");

/*************************************************************************************** */

class createText extends standardTool {
  constructor(name) {
    super();
    this.name = name;
  }
  textMenuX = null;
  textMenuY = null;
  textValue = "";
  fontSize = 24;
  fontFamily = "Arial";
  start(Axis) {
    this.defineInputs();
    this.textMenuX = Axis.X;
    this.textMenuY = Axis.Y;
    const TextBoxSpawnX = Axis.X + this.ctxRef.canvas.offsetLeft;
    const TextBoxSpawnY = Axis.Y + this.ctxRef.canvas.offsetTop;
    const existingElement = document.getElementsByClassName("textInput");

    const valueInput = document.createElement("textarea");
    valueInput.setAttribute("class", "textInput");
    valueInput.style.cssText = `top: ${TextBoxSpawnY}px;left:${TextBoxSpawnX}px;font-size: ${this.fontSize}px;`;
    //adjust by canvas field
    document.body.appendChild(valueInput);

    const valueInputLocation = document.querySelector(".textInput");

    valueInputLocation.addEventListener("keydown", (event) => {
      this.textValue = event.target.value;
      console.log(event.target.value);
      console.log("keydown");
      this.clearOverlay();
      this.ctxRefV.font = `${this.lineWidth}px ${this.fontFamily}`;
      this.ctxRefV.fillStyle = this.color;
      this.ctxRefV.fillText(
        this.textValue,
        this.textMenuX,
        this.textMenuY + this.fontSize
      );
      if (event.key === "Enter") {
        this.place();
        valueInputLocation.remove();
      }
    });
  }
  action(Axis) {}
  stop(Axis) {}
  cursorFunction(Axis) {}
  place(Axis) {
    this.ctxRef.font = `${this.lineWidth}px ${this.fontFamily}`;
    this.ctxRef.fillStyle = this.color;
    this.ctxRef.fillText(
      this.textValue,
      this.textMenuX,
      this.textMenuY + this.fontSize
    );
    this.clearOverlay();
    this.textValue = "";
    console.log("place executed");
  }
}
export const text = new createText("text");

//maxWidth , placement adjust,  font picker  ,eases of use,drag

//more reformations needed!!!
