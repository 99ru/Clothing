import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mens">mens</Link>
            </li>
            <li>
              <Link to="/womens">womens</Link>
            </li>
            <li>
              <Link to="/cart"><ShoppingBagIcon /></Link>
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
