import React, { useState } from "react";
import { DrawField } from "./components/DrawField";
import { Toolbar } from "./components/Toolbar";
import { Pen } from "./global/ToolFunctions";


function App() {
  const [ToolbarStatus, setToolbarStatus] = useState({
    color: "#000000",
    lineWidth: 5,
    tool: Pen,
  });

  return (
    <div className="App">
      <DrawField ToolbarStatus={ToolbarStatus} />
      <Toolbar
        setToolbarStatus={setToolbarStatus}
        ToolbarStatus={ToolbarStatus}
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
// create class for on click event for creating lines

// const returnCoordinates = () => {
//   let area = event.target.getBoundingClientRect();
//   let x = event.clientX - area.left;
//   let y = event.clientY - area.top;
//   // console.log(`XAxis:${x}YAxis:${y}`);
//   setMouse({ xAxis: x, yAxis: y });
//   console.log(Mouse);
// };

// https://github.com/satansdeer/drawing-react-canvas
