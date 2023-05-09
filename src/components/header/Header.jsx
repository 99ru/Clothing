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
            <li>
              <a href="#">accesories</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="info">
        <div className="info-container">
          <p>free shipping in 🇸🇪</p>
        </div>
      </div>

      <div className="header__mobile">
            <div className="mobile-new-release">

                <div id="mens-release" className="release">
                    <a href="#">Shop mens</a>
                </div>

                <div id="women-release" className="release">
                    <a href="#">Shop womens</a>
                </div>
    
            </div>
        </div>   
    </header>
  );
};

export default Header;
