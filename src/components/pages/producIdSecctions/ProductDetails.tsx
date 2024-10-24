"use client";
import { useGetProductsByIdQuery } from "@/redux/api/product";
import { useParams } from "next/navigation";
import React from "react";
const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductsByIdQuery(productId);
  console.log("🚀 ~ ProductDetails ~ product:", product);

  return (
    <section className="pt-[70px]">
      <div className="container">
        <h1>products</h1>
      </div>
    </section>
  );
};

export default ProductDetails;
