import React, { useState } from "react";
import products from "../../assets/products.json";
import male1 from "../../assets/new5.jpg";
import male2 from "../../assets/new6.jpg";
import male3 from "../../assets/new7.jpg";
import male4 from "../../assets/new8.jpg";
import male5 from "../../assets/new9.jpg";
import male6 from "../../assets/new10.jpg";
import male7 from "../../assets/new11.jpg";
import male8 from "../../assets/new12.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MensClothing = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const mensProducts = products.products.filter((product) => product.gender === "Male");

  const getImage = (id) => {
    switch (id) {
      case 5:
        return male1;
      case 6:
        return male2;
      case 7:
        return male3;
      case 8:
        return male4;
      case 9:
        return male5;
      case 10:
        return male6;
      case 11:
        return male7;
      case 12:
        return male8;
      default:
        return "";
    }
  };

  return (
    <div className="shop">
      <div className="shop-header" id="cw1">
        <div className="shop-title">
          <h2>new</h2>
          <p>new collection</p>
        </div>
        <a className="view">View all</a>
      </div>

      <section className="items-wrapper">
        {mensProducts.map((product) => (
          <article key={product.id} className="item item-a">
            <div className="item-container__a">
              <a>
                <img src={getImage(product.id)} alt={product.name} />
              </a>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
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
    </div>
  );
};

export default MensClothing;
