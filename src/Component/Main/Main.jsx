import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "../Container/Container";
import Engine from "../Engine/Engine";
import "../css/main.css";

const mainBody = () => {
  return (
    <Router>
      <section class="main">
    <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/engine" element={<Engine />} />
    </Routes>
      </section>
    </Router>
  );
};

export default mainBody;
