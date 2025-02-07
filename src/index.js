import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./assets/styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/marvel">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
