import { useState } from "react";
import { isHotkeyPressed } from "react-hotkeys-hook";
const DEFAULT_SCALE = 0.6;
const DEFAULT_POSITION = { x: 0, y: 0 };
export const ZOOM = {
  SCALE_BY: 1.08,
  MAX_ZOOM_IN: 2,
  MAX_ZOOM_OUT: 1000,
  STEP_INCREMENT: 5,
  DEBOUNCE_TIMEOUT: 2000,
};

export const useStage = ({ stageRef }) => {
  const [currentStage, setCurrentStage] = useState({
    scale: DEFAULT_SCALE,
    position: DEFAULT_POSITION,
    isDragging: false,
  });

  const handleOnWheel = (event) => {
    event.evt.preventDefault();
    if (stageRef.current !== null) {
      const stage = stageRef.current;
      const oldScale = stage.scaleX();
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const isCtrlPressed = isHotkeyPressed("meta");
      if (isCtrlPressed) {
        const mousePointTo = {
          x: (pointerX - stage.x()) / oldScale,
          y: (pointerY - stage.y()) / oldScale,
        };
        const newScale =
          event.evt.deltaY > 0
            ? Math.max(oldScale / ZOOM.SCALE_BY, ZOOM.MAX_ZOOM_IN / 100)
            : Math.min(oldScale * ZOOM.SCALE_BY, ZOOM.MAX_ZOOM_OUT / 100);
        stage.scale({ x: newScale, y: newScale });
        const newPos = {
          x: pointerX - mousePointTo.x * newScale,
          y: pointerY - mousePointTo.y * newScale,
        };
        stage.position(newPos);
        setCurrentStage({
          scale: newScale,
          position: newPos,
          isDragging: false,
        });
        stage.batchDraw();
      } else {
        const dx = -event.evt.deltaX;
        const dy = -event.evt.deltaY;

        const newPos = {
          x: stage.x() + dx,
          y: stage.y() + dy,
        };
        stage.position(newPos);
        setCurrentStage({
          scale: oldScale,
          position: newPos,
          isDragging: false,
        });
      }
    }
  };
  const handleDragStart = () => {
    setCurrentStage((prev) => ({ ...prev, isDragging: true }));
  };

  const handleDragEnd = () => {
    const stage = stageRef.current;
    if (stage) {
      const { x: pointerX, y: pointerY } = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointerX - stage.x()) / stage.scaleX(),
        y: (pointerY - stage.y()) / stage.scaleX(),
      };
      const newPos = {
        x: pointerX - mousePointTo.x * stage.scaleX(),
        y: pointerY - mousePointTo.y * stage.scaleX(),
      };
      setCurrentStage((prev) => ({
        ...prev,
        position: newPos,
        isDragging: false,
      }));
    }
  };

  return { handleOnWheel, currentStage, handleDragEnd, handleDragStart };
};
