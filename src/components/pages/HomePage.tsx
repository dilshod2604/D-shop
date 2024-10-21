import React from "react";
import Welcome from "./HomePageSections/Welcome";
import NewProducts from "./HomePageSections/NewProducts";
import Category from "./HomePageSections/Category";
import BestProducts from "./HomePageSections/BestProducts";
import TopProduct from "./HomePageSections/TopProduct";
import ExploredProducts from "./HomePageSections/ExploredProducts";
import NewColection from "./HomePageSections/NewColection";
import NewArrival from "./HomePageSections/NewArrival";
import Adventages from "./HomePageSections/Adventages";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <NewProducts />
      <Category />
      <BestProducts />
      <TopProduct />
      <ExploredProducts />
      <NewColection />
      <NewArrival />
      <Adventages />
    </>
  );
};

export default HomePage;
