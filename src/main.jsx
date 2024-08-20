import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./components/Nav.jsx";
import Home from "./HomePage.jsx";
import ScrollChangeBackground from "./components/ScrollChangeBackground.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
