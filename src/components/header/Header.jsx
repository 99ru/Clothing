import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.svg";
import CartModal from "../../components/cart/CartModal";

const Header = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = []; // your cart data

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }


  return (
    <header>
      <div className="header-container">
          <img src={logo} alt="logo" />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/womens">Womens</Link>
            </li>
            <li>
             <button className="header-cart" onClick={toggleCart}>
                <ShoppingCartIcon />
              </button>
            </li>
          </ul>
        </nav>

       

        <CartModal isOpen={isCartOpen} toggle={toggleCart} cart={cart} />
      </div>

      
    </header>
  );
};

export default Header;
