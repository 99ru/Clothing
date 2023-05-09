import React from "react";
import herr from "../../assets/herr.webp";
import dam from "../../assets/dam.webp";

const Category = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={herr} alt="herr" />
        <img src={dam} alt="dam" />
      </div>
    </div>
  );
};

export default Category;
