import React, { useState } from "react";
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
        <section>
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
        </section>
      </div>
      <div className="item-container__b">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </article>
  );
};

export default ProductItem;
