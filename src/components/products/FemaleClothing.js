import React, { useContext } from 'react';
import { CartContext } from "../../CartContext";
import products from "../../assets/products.json";
import ProductItem from "./ProductItem";

const FemaleClothing = () => {
  const { addToCart } = useContext(CartContext);

  const femaleProducts = products.products.filter(
    product => product.gender === "Female"
  );

  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw3">
          <div className="shop-title">
            <h1>Women's Clothing</h1>
          </div>
        </div>

        <section className="items-wrapper">
          {femaleProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default FemaleClothing;
