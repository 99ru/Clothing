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
            <h4>Check out our</h4>
            <h1>New Releases</h1>
          </div>
          {/* <p className="view">View all</p> */}
        </div>

        <section className="items-wrapper">
          {latestProducts.map((product) => (
            <article key={product.id} className="item item-a">
              <div className="item-container__a">
                <p>
                  <img src={product.image} alt={product.name} />
                </p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                   <ShoppingCartIcon className="shopping-cart-icon"/>
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

export default NewArrivals;
