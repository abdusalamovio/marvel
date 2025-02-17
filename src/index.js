import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";
import "./assets/styles/style.scss";

createRoot(document.getElementById("root")).render(
  <Router basename="/marvel">
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
