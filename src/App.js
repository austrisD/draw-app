import React, { useState } from "react";
import { DrawField } from "./components/DrawField";
import { Toolbar } from "./components/Toolbar";
import { DefaultToolbarStatus } from "./global/initialToolbarStatus";

function App() {
  const [ToolbarStatus, setToolbarStatus] = useState(DefaultToolbarStatus);

  const test = () => {
    
  };

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

      {/* <button
        onClick={() => {
          console.log(ToolbarStatus);
        }}
      >
        test
      </button> */}
    </div>
  );
}

export default App;

// https://github.com/satansdeer/drawing-react-canvas
