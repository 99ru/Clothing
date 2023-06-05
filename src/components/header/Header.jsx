import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartModal from "../../components/cart/CartModal";
import { CartContext } from "../../CartContext";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ClearIcon from "@mui/icons-material/Clear";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [mobileMenu, setMobileMenu] = useState(false); // new state for mobile menu

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(false);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav className="navbar">
          <div className={mobileMenu ? "menu-open" : "menu-closed"}>
            <ul>
              <li>
                <Link to="/" onClick={handleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/men" onClick={handleMobileMenu}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" onClick={handleMobileMenu}>
                  Women
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Badge
          badgeContent={cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
          color="primary"
        >
          <ShoppingBagIcon onClick={handleCartOpen} className="shopping-bag" />
        </Badge>
        <div onClick={handleMobileMenu} className="mobile-menu">
          {mobileMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
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
