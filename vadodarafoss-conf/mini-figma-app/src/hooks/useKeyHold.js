import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

export const useKeyHold = ({ key, onKeyDown, onKeyUp }) => {
  const isKeydownDetected = useRef(false);
  useHotkeys(key, (e) => {
    if (!isKeydownDetected.current) {
      onKeyDown(e);
      isKeydownDetected.current = true;
    }
  });
  useHotkeys(
    key,
    (e) => {
      onKeyUp(e);
      isKeydownDetected.current = false;
    },
    { keydown: false, keyup: true }
  );
};
