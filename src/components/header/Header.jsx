import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from "../../assets/logo.svg";
import CartModal from "../../components/cart/CartModal";
import { CartContext } from "../../CartContext";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // Get cartItems from the CartContext

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };

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
              <ShoppingBagIcon onClick={handleCartOpen} />
            </li>
          </ul>
        </nav>
      </div>
      {cartOpen && (
        <div className="cart-modal-container">
          <div className="cart-modal">
            <button className="close-btn" onClick={handleCartClose}>
              X
            </button>
            {cartOpen && <CartModal cartItems={cartItems} closeModal={handleCartClose} />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
