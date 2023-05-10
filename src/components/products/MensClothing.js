import React, { useState } from "react";
import products from "../../assets/products.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MensClothing = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const mensProducts = products.products.filter(
    (product) => product.gender === "Male"
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
            <article key={product.id} className="item item-a">
              <div className="item-container__a">
                <a>
                  <img src={product.image} alt={product.name} />
                </a>
                <button
                  key={product.id}
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCartIcon />
                </button>
              </div>
              <div className="item-container__b">
                <h3>
                  <a>{product.name}</a>
                </h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
};

export default MensClothing;
