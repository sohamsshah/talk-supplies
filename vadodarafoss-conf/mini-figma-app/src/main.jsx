import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShapesProvider } from "./context/shapes-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShapesProvider>
      <App />
    </ShapesProvider>
  </React.StrictMode>
);
