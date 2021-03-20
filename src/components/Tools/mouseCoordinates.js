import { standardTool } from "./_ToolBaseClass";

class createMouseCoordinates extends standardTool {
  toolON = false;
  start() {}
  action() {}
  stop() {}
  cursorFunction() {}
  render() {
    return (
      <>
        <div
          onClick={() => {
            this.toolON = true;
          }}
          className="tool"
          style={this.toolON === true ? this.ActiveBtn : this.inActiveBtn}
        >
          CORD
        </div>
        <p
          style={{
            display: this.ToolActive ? "block" : "none",
            top: this.Axis.Y - 10,
            left: this.Axis.X + 130,
          }}
          className="cursorCandidates"
        >
          {`X:${this.Axis.X}`}
          <br />
          {`Y:${this.Axis.Y}`}
        </p>
      </>
    );
  }
}

export const mouseCoordinates = new createMouseCoordinates("coordinates");
