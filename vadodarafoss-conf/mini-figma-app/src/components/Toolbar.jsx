import React from "react";
import { useShapes } from "../context/shapes-context";

export const Toolbar = ({ handleDragToolToggle, handleAddRectangle }) => {
  const { shapes, setShapes } = useShapes();

  const handleDeleteSelected = () => {
    const selectedShape = shapes.selectedShape;

    const filteredShapes = {
      ...shapes,
      [selectedShape.type]: shapes[selectedShape.type].filter(
        (shape) => shape.id !== selectedShape.id
      ),
    };

    setShapes(filteredShapes);
  };

  return (
    <div className="controls">
      <button onClick={handleAddRectangle}>Add rectangle</button>
      <button onClick={handleDragToolToggle}>Toggle Drag</button>
      <button onClick={handleDeleteSelected}>Delete</button>
    </div>
  );
};
