import React, { useContext } from 'react';
import { CartContext } from "../../CartContext";
import products from "../../assets/products.json";
import ProductItem from "./ProductItem";

const MensClothing = () => {
  const { addToCart } = useContext(CartContext);

  const mensProducts = products.products.filter(
    product => product.gender === "Male"
  );

  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw2">
          <div className="shop-title">
            <h1>Men's Clothing</h1>
          </div>
        </div>

        <section className="items-wrapper">
          {mensProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default MensClothing;
