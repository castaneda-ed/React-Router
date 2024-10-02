import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Yellow from "./Yellow";
import { Routes, Route } from "react-router-dom";

export default function RoutesList() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/blue" element={Blue()} />
        <Route path="/red" element={Red()} />
        <Route path="/yellow" element={Yellow()} />
      </Routes>
    </div>
  );
}
