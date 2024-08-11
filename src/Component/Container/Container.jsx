import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

const cards = () => {
  return (
    <div class="main-container">
        <div class="cards">
          <div className="engine-card card">
              <Link to="/engine" className="no-underline"><h1>Engine</h1></Link>
          </div>
          <div class="battery-card card">
            <Link to="/battery" className="no-underline"><h1>Battery</h1></Link>
          </div>
          <div class="tyre-card card">
            <Link to="/tyre" className="no-underline"><h1>Tyre</h1></Link>
          </div>
          <div class="care-products-card card">
            <Link to="/care-products" className="no-underline"><h1>Car Care Products</h1></Link>
          </div>
        </div>
    </div>
  );
};

export default cards;
