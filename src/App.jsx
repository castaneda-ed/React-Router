import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./Components/Red.jsx";
import Blue from "./Components/Blue.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/"}>HOME</Link>
        <Link to={"/blue"}>BLUE</Link>
        <Link to={"/red"}>RED</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/blue" element={Blue()} />
          <Route path="/red" element={Red()} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
