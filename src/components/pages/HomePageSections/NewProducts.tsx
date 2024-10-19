"use client";
import { useGetProductsQuery } from "@/redux/api/products";
import React from "react";
const NewProducts = () => {
  const { data } = useGetProductsQuery();
  console.log("🚀 ~ NewProducts ~ data:", data);
  return (
    <section>
      <div className="container">
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
