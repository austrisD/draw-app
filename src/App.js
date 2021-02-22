import { DrawField } from "./components/DrawField";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <DrawField />
      <Toolbar  />
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
