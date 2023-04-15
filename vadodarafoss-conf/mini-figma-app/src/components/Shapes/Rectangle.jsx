import { Rect, Transformer } from "react-konva";
import { useShapes } from "../../context/shapes-context";
import { useRef, useEffect } from "react";

export const Rectangle = ({ rectangle }) => {
  const shapeRef = useRef(null);
  const trRef = useRef(null);
  const { shapes, setShapes } = useShapes();

  const isShapeSelected = shapes.selectedShape?.id === rectangle.id;

  const handleDragEnd = (e) => {
    const updatedX = e.target.x();
    const updatedY = e.target.y();

    const updatedRectangles = shapes.rectangles.map((rect) => {
      if (rect.id === rectangle.id) {
        return { ...rect, x: updatedX, y: updatedY };
      }
    });
    setShapes((prev) => ({ ...prev, rectangles: updatedRectangles }));
  };

  const handleSelectShape = () => {
    setShapes((prev) => ({
      ...prev,
      selectedShape: { type: "rectangles", id: rectangle.id },
    }));
  };

  const handleTransformEnd = (e) => {
    const node = e.target;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);
    const updatedRectangleProperties = {
      width: node.width() * scaleX,
      height: node.height() * scaleY,
      x: node.x(),
      y: node.y(),
    };

    node.width(updatedRectangleProperties.width);
    node.height(updatedRectangleProperties.height);
    const updatedRectangles = shapes.rectangles.map((rect) => {
      if (rect.id === rectangle.id) {
        return { ...rect, ...updatedRectangleProperties };
      }
    });
    setShapes((prev) => ({ ...prev, rectangles: updatedRectangles }));
  };

  useEffect(() => {
    if (isShapeSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isShapeSelected]);
  return (
    <>
      <Rect
        ref={shapeRef}
        id={rectangle.id}
        x={rectangle.x}
        y={rectangle.y}
        height={rectangle.height}
        width={rectangle.width}
        fill="#009FBD"
        draggable
        onClick={handleSelectShape}
        handleDragEnd={handleDragEnd}
        handleTransformEnd={handleTransformEnd}
      />
      {isShapeSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
