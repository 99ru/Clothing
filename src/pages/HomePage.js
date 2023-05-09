// src/pages/HomePage.js
import React from "react";
import Category from "../components/category/category";
import NewArrivals from "../components/products/NewArrivals";

const HomePage = () => {
  return (
    <>
      <Category />
      <NewArrivals />
    </>
  );
};

export default HomePage;
