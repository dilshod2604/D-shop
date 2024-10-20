import React from "react";
import Welcome from "./HomePageSections/Welcome";
import NewProducts from "./HomePageSections/NewProducts";
import Category from "./HomePageSections/Category";
import BestProducts from "./HomePageSections/BestProducts";
import TopProduct from "./HomePageSections/TopProduct";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <NewProducts />
      <Category />
      <BestProducts />
      <TopProduct />
    </>
  );
};

export default HomePage;
