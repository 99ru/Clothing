import React, { useState } from "react";
import products from "../../assets/products.json";
import new1 from "../../assets/new1.jpg";
import new2 from "../../assets/new2.jpg";
import new3 from "../../assets/new3.jpg";
import new4 from "../../assets/new4.jpg";
import new5 from "../../assets/new5.jpg";
import new6 from "../../assets/new6.jpg";
import new7 from "../../assets/new7.jpg";
import new8 from "../../assets/new8.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NewArrivals = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
          {products.products.map((product) => (
            <article key={product.id} className="item item-a">
              <div className="item-container__a">
                <a>
                  {product.id === 1 && <img src={new1} />}
                  {product.id === 2 && <img src={new2} />}
                  {product.id === 3 && <img src={new3} />}
                  {product.id === 4 && <img src={new4} />}
                  {product.id === 5 && <img src={new5} />}
                  {product.id === 6 && <img src={new6} />}
                  {product.id === 7 && <img src={new7} />}
                  {product.id === 8 && <img src={new8} />}
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
