import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartModal = ({ cartItems }) => {
  const [cart, setCart] = useState(cartItems || []);

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((accumulator, item) => accumulator + item.price, 0);
  };

  return (
    <div>
    <h1>Cart</h1>
    {cart.length > 0 ? (
      <div>
        <div className="cart-items-container">
          {cart.map((item) => (
            <ShoppingCartIcon
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="total-container">
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      </div>
    ) : (
      <p>Your cart is empty.</p>
    )}
  </div>
  );
};

export default CartModal;
