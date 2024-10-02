import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import RoutesList from "./Components/RoutesList.jsx";

function App() {
  return (
    <div id="container">
      <Navbar />
      <RoutesList />
    </div>
  );
}
export default App;
