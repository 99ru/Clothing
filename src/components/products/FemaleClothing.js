
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

import products from "../../assets/products.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const FemaleClothing = () => {
  const { addToCart } = useContext(CartContext);


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
                <p>
                  <img src={product.image} alt={product.name} />
                </p>
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
                  <p>{product.name}</p>
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
