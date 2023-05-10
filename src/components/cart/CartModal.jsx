import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartModal = ({ cartItems, closeModal }) => {

  const calculateTotal = () => {
    return cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
  };

  return (
    <div className="cart-modal-container">
      <div className="cart-modal">
        <button className="close-btn" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
        <h1>Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
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
    </div>
  );
};

export default CartModal;
