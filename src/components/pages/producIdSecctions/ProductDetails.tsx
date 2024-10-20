"use client";
import { useGetProductsByIdQuery } from "@/redux/api/products";
import { useParams } from "next/navigation";
import React from "react";
const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductsByIdQuery(Number(productId));
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="flex gap-x-7 max-lg:flex-col gap-y-5 items-center  ">
          <div className="w-full h-[600px] border"></div>
          <div className="w-full h-[600px] border"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
