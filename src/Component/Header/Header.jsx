import React from "react";
import '../css/header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="company-name">
            <h1>Company Name</h1>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
