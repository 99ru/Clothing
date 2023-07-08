import React, { useContext, useState } from 'react';
import { CartContext } from "../../CartContext";
import products from "../../assets/products.json";

const ProductItem = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      key={product.id} 
      className="item item-a"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="item-container__a">
        <p>
          <img src={product.image} alt={product.name} />
             {isHovered && (
          <div className="hover-modal">
            <button
              className="quick-add-to-cart"
              onClick={() => addToCart(product)}
            >
              Quick Add
            </button>
          </div>
        )}
        </p>
     
      </div>
      <div className="item-container__b">
        <h3>
          <p>{product.name}</p>
        </h3>
        <p>{product.price}</p>
      </div>
    </article>
  );
};

export default ProductItem;
