import React from "react";
import { standardTool } from "./_ToolBaseClass";
import { VscTextSize } from "react-icons/vsc";

export class WriteText extends standardTool {
  textPlacementX = null;
  textPlacementY = null;
  inputField = null;
  textValue = "";
  fontSize = 8;
  fontFamily = "Arial";
  start() {
    this.defineInputs();
    this.ToolActive = true;

    this.textPlacementX = this.Axis.X;
    this.textPlacementY = this.Axis.Y;
    const TextBoxSpawnX = this.Axis.X + this.ctxRef.canvas.offsetLeft;
    const TextBoxSpawnY = this.Axis.Y + this.ctxRef.canvas.offsetTop;
    this.clearOverlay();
    if (this.inputField !== null) this.inputField.remove();

    const valueInput = document.createElement("textarea");
    valueInput.setAttribute("class", "textInput");
    valueInput.setAttribute("id", "TextInput");
    valueInput.style.cssText = `top: ${TextBoxSpawnY}px;left:${TextBoxSpawnX}px;font-size: ${this.fontSize}px;`;
    document.body.appendChild(valueInput);

    this.inputField = document.getElementById("TextInput");

    this.inputField.addEventListener("keydown", (event) => {
      this.textValue = event.target.value;
      this.clearOverlay();
      valueInput.style.cssText = `top: ${TextBoxSpawnY}px;left:${TextBoxSpawnX}px;font-size: ${this.fontSize}px;`;
      this.ctxRefV.font = `${this.fontSize}px ${this.fontFamily}`;
      this.ctxRefV.fillStyle = this.color;
      this.ctxRefV.fillText(
        this.textValue,
        this.Axis.X,
        this.Axis.Y + this.fontSize
      );
      if (event.key === "Enter") {
        this.place();
        this.inputField.remove();
      }
    });
    //move box tool drag event!!!
    //at fist text not spawning in correct font size!!!
    //if change tool textbook need to delete itself!!!
    //position  left - textarea size
    //delay in writing by one symbol
  }
  action() {
    //when tool active enable drag mode
  }
  stop() {}
  cursorFunction() {}
  place() {
    this.ctxRef.font = `${this.fontSize}px ${this.fontFamily}`;
    this.ctxRef.fillStyle = this.color;
    this.ctxRef.fillText(
      this.textValue,
      this.textPlacementX,
      this.textPlacementY + this.fontSize
    );
    this.clearOverlay();
    this.textValue = "";
    this.ToolActive = false;
  }
  render() {
    const WriteTextSettings = () => {
      return (
        <div
          className="text__settings"
          style={{
            display: "block",
            position: "absolute",
          }}
        >
          <select
            className="text__settings__size"
            onChange={(event) => {
              console.log(this);
              this.fontSize = parseInt(event.target.value);
            }}
          >
            <option value="8">8px</option>
            <option value="12">13px</option>
            <option value="16">16px</option>
            <option value="24">24px</option>
            <option value="32">32px</option>
            <option value="42">42px</option>
            <option value="72">72px</option>
          </select>
          <select
            className="text__settings__fontSelect"
            onChange={(event) => {
              this.fontFamily = event.target.value;
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Gill Sans">Gill Sans</option>
          </select>
        </div>
      );
    };
    return (
      <>
        <div
          onClick={() => {
            this.toolON = true;
            this.props.setThis(this);
          }}
          className="tool"
          style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
        >
          <VscTextSize />
        </div>
        {this.toolON ? <WriteTextSettings /> : null}
      </>
    );
  }
}

//maxWidth , placement adjust,  font picker  ,eases of use,drag

//more reformations needed!!!
