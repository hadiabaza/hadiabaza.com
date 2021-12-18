import React from "react";
import "./App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Home from "./Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Portfolio />
      <About />
    </div>
  );
}
export default App;
