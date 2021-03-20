import React, { useState } from "react";
import { DrawField } from "./components/DrawField";
import { Toolbar } from "./components/Toolbar";
import { Pen } from "./components/Tools/pen";

function App() {
  const [ToolbarStatus, setToolbarStatus] = useState({
    color: "#000000",
    lineWidth: 5,
    tool: new Pen(),
    canvasWidth: 800,
    canvasHeight: 800,
  });

  return (
    <div className="App">
      <Toolbar
        setToolbarStatus={setToolbarStatus}
        ToolbarStatus={ToolbarStatus}
      />

      <DrawField
        ToolbarStatus={ToolbarStatus}
        setToolbarStatus={setToolbarStatus}
      />
    </div>
  );
}

export default App;

// https://github.com/satansdeer/drawing-react-canvas
