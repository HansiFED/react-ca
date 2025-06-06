import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/**
 * Application entry point.
 *
 * - Renders the root `App` component into the DOM.
 * - Wraps the app in `React.StrictMode` to help identify potential issues in development.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
