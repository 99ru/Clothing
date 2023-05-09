import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="burger-container">
          <i className="fas fa-bars"></i>
        </div>

        <div className="logo-container">
          <h2>GYM CLOTHING</h2>
          </div>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#">mens</a>
            </li>
            <li>
              <a href="#">womens</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="info">
        <div className="info-container">
          <p>free shipping worldwide</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
