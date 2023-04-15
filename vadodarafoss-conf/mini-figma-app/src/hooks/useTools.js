import { useState } from "react";
import { useShapes } from "../context/shapes-context";
import { createRectangle } from "../utils/createRectangle";

export const useTools = () => {
  const { shapes, setShapes } = useShapes();
  const [tools, setTools] = useState({
    drag: false,
  });

  const handleDragToolToggle = () => {
    setTools((prev) => ({ ...prev, drag: !prev.drag }));
  };

  const handleAddRectangle = () => {
    console.log("here");
    const newRectangle = createRectangle();
    setShapes((prev) => ({
      ...prev,
      rectangles: [...prev.rectangles, newRectangle],
    }));
  };

  return { setTools, tools, handleDragToolToggle, handleAddRectangle };
};
