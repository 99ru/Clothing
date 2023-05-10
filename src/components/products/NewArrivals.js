import React, { useContext } from "react";
import products from "../../assets/products.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../CartContext";

const NewArrivals = () => {
  const { addToCart } = useContext(CartContext);
  const latestProducts = products.products.slice(-8).reverse();

  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw1">
          <div className="shop-title">
            <h2>Check out our</h2>
            <p>new releases</p>
          </div>
          <p className="view">View all</p>
        </div>

        <section className="items-wrapper">
          {latestProducts.map((product) => (
            <article key={product.id} className="item item-a">
              <div className="item-container__a">
                <a href="#">
                  <img src={product.image} alt={product.name} />
                </a>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCartIcon />
                </button>
              </div>
              <div className="item-container__b">
                <h3>
                  <a href="#">{product.name}</a>
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
