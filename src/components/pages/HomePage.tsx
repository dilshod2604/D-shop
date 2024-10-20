import React from "react";
import Welcome from "./HomePageSections/Welcome";
import NewProducts from "./HomePageSections/NewProducts";
import Category from "./HomePageSections/Category";
import BestProducts from "./HomePageSections/BestProducts";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <NewProducts />
      <Category />
      <BestProducts/>
    </>
  );
};

export default HomePage;
