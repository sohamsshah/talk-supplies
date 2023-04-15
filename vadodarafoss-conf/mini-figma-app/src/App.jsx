import { useRef } from "react";
import { Stage, Layer } from "react-konva";
import "./App.css";
import { useStage } from "./hooks/useStage";
import { Toolbar } from "./components/Toolbar";
import { useTools } from "./hooks/useTools";
import { Shapes } from "./components/Shapes";

function App() {
  const stageRef = useRef(null);
  const {
    tools: { drag },
    handleDragToolToggle,
    handleAddRectangle,
  } = useTools();
  const {
    currentStage: stage,
    handleOnWheel,
    handleDragEnd,
    handleDragStart,
  } = useStage({ stageRef });

  return (
    <div className="App">
      <div>
        <p className="title">My Mini Figma!</p>
        <Stage
          ref={stageRef}
          onWheel={handleOnWheel}
          scaleX={stage.scale}
          scaleY={stage.scale}
          style={{
            cursor: drag ? "grab" : "default",
            backgroundColor: "white",
            backgroundSize: "16.8721px 16.8721px",
            backgroundImage:
              "radial-gradient(rgb(209, 204, 217) 0.843606px, transparent 0px)",
          }}
          draggable={drag}
          width={window.innerWidth}
          height={window.innerHeight}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <Layer>
            <Shapes />
          </Layer>
        </Stage>
        <Toolbar
          handleAddRectangle={handleAddRectangle}
          handleDragToolToggle={handleDragToolToggle}
        />
      </div>
    </div>
  );
}

export default App;
