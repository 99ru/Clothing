import React, { useContext } from 'react';
import { CartContext } from "../../CartContext";
import products from "../../assets/products.json";
import ProductItem from "./ProductItem";

const NewArrivals = () => {
  const { addToCart } = useContext(CartContext);
  const latestProducts = products.products.slice(-8).reverse();

  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw1">
          <div className="shop-title">
            <h4>Check out our</h4>
            <h1>New Releases</h1>
          </div>
        </div>

        <section className="items-wrapper">
          {latestProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default NewArrivals;
