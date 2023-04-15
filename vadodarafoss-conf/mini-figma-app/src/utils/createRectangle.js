import { v4 as uuidv4 } from "uuid";

const RECT_DEFAULTS = {
  x: 200,
  y: 200,
  height: 100,
  width: 100,
};

export const createRectangle = () => {
  return {
    id: uuidv4(),
    x: 200,
    y: 200,
    height: 100,
    width: 100,
  };
};
