import React, { useState } from "react";
import products from "../../assets/products.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NewArrivals = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Get 4 latest female products
  const femaleProducts = products.products
    .filter((product) => product.gender === "Female")
    .slice(0, 4);

  // Get 4 latest male products
  const maleProducts = products.products
    .filter((product) => product.gender === "Male")
    .slice(0, 4);

  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw1">
          <div className="shop-title">
            <h2>Check out our</h2>
            <p>new releases</p>
          </div>
          <a className="view">View all</a>
        </div>

        <section className="items-wrapper">
          {[...femaleProducts, ...maleProducts].map((product) => (
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

export default NewArrivals;
