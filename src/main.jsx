import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./Nav.jsx";
import Home from "./home.jsx";
import ScrollChangeBackground from "./ScrollChangeBackground.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
