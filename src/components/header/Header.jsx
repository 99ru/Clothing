import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../assets/logo.svg";
import CartModal from "../../components/cart/CartModal";
import { CartContext } from "../../CartContext";
import ClearIcon from "@mui/icons-material/Clear";
import Badge from "@mui/material/Badge";

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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li className="shopping-bag">
              <Badge
                badgeContent={cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
                color="primary"
              >
                <ShoppingBagIcon onClick={handleCartOpen} />
              </Badge>
            </li>
          </ul>
        </nav>
      </div>
      {cartOpen && (
        <div className="cart-modal-container">
          <div className="cart-modal">
            <button className="close-btn" onClick={handleCartClose}>
              <ClearIcon />
            </button>
            {cartOpen && (
              <CartModal cartItems={cartItems} closeModal={handleCartClose} />
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
