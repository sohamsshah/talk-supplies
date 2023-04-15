import { Rect } from "react-konva";
import { useShapes } from "../../context/shapes-context";
import { Rectangle } from "./Rectangle";

export const Rectangles = () => {
  const {
    shapes: { rectangles },
  } = useShapes();
  return rectangles.map((rectangle) => {
    return <Rectangle rectangle={rectangle} />;
  });
};
