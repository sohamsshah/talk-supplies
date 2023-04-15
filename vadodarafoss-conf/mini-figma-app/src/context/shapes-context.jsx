import { createContext, useContext, useState } from "react";

const ShapesContext = createContext();

const initialState = {
  circles: [],
  rectangles: [],
  selectedShape: null,
};

export const ShapesProvider = ({ children }) => {
  const [shapes, setShapes] = useState(initialState);
  return (
    <ShapesContext.Provider value={{ shapes, setShapes }}>
      {children}
    </ShapesContext.Provider>
  );
};

export const useShapes = () => {
  return useContext(ShapesContext);
};
