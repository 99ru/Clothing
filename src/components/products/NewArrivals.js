import React from "react";
import products from '../../assets/products.json';
import new1 from '../../assets/new1.jpg';
import new2 from '../../assets/new2.jpg';
import new3 from '../../assets/new3.jpg';
import new4 from '../../assets/new4.jpg';

const NewArrivals = () => {
  return (
    <div>
      <section className="shop">
        <div className="shop-header" id="cw1">
          <div className="shop-title">
            <h2>Check out our</h2>
            <p>new releases</p>
          </div>
          <a className="view" href="#">
            View all
          </a>
        </div>

        <section className="items-wrapper">
          {products.products.map((product) => (
            <article key={product.id} className="item item-a">
              <div className="item-container__a">
                <a href="#">
                  {product.id === 1 && (
                    <img src={new1} alt="glasses hawkers" />
                  )}
                  {product.id === 2 && (
                    <img src={new2} alt="glasses hawkers" />
                  )}
                  {product.id === 3 && (
                    <img src={new3} alt="glasses hawkers" />
                  )}
                  {product.id === 4 && (
                    <img src={new4} alt="glasses hawkers" />
                  )}
                </a>
                <button className="add-to-cart">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
              <div className="item-container__b">
                <h3>
                  <a href="#">{product.name}</a>
                </h3>
                <p className="color">blue marl</p>
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
