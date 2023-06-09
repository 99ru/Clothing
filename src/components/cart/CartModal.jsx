import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const CartModal = ({ closeModal }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const decreaseQuantity = (itemId) => {
    const currentItem = cartItems.find((item) => item.id === itemId);
    if (currentItem.quantity > 1) {
      updateQuantity(itemId, currentItem.quantity - 1);
    }
  };

  const increaseQuantity = (itemId) => {
    updateQuantity(
      itemId,
      cartItems.find((item) => item.id === itemId).quantity + 1
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
  };

  return (
    <div className="cart-modal-container">
      <div className="cart-modal">
        <button className="close-btn" onClick={closeModal}>
          <ClearIcon />
        </button>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <h2>Your shopping bag is empty</h2>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-container">
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                  <div
                    type="button"
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <DeleteIcon />
                  </div>
                  <div className="item-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-container">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>

            <div className="checkout-button">
            <button>Check out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
