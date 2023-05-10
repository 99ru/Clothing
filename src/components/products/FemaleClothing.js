
import React, { useState } from "react";
import products from "../../assets/products.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const FemaleClothing = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const femaleProducts = products.products.filter(
    (product) => product.gender === "Female"
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

export default FemaleClothing;
