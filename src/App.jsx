import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import RoutesList from "./Components/RoutesList.jsx";
import FooterNav from "./Components/Footer.jsx";
import Title from "./Components/Title.jsx";

function App() {
  return (
    <>
      <div id="container">
        <Title />
        <Navbar />
        <RoutesList />
        <FooterNav />
      </div>
    </>
  );
}
export default App;
