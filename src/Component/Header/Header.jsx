import React from "react";
import '../css/header.css';

function Header() {
  return (
    <header>
      <nav>
        <div class="navbar">
          <div class="logo">
            <h2>Logo</h2>
          </div>
          <div class="company-name">
            <h1>Company Name</h1>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
