import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "../Container/Container";
import Engine from "../Engine/Engine";
import Battery from "../Battery/Battery";
import Tyre from "../Tyre/Tyre";
import "../css/main.css";

const mainBody = () => {
  return (
    <Router>
      <section className="main">
    <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/battery" element={<Battery />} />
        <Route path="/tyre" element={<Tyre />} />
    </Routes>
      </section>
    </Router>
  );
};

export default mainBody;
