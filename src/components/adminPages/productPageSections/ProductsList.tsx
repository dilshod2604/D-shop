"use client";
import React, { useState } from "react";
import { useGetProductsQuery } from "@/redux/api/product";
import FloatMenu from "../ui/FloatMenu";
import CardsSkeleton from "@/components/ui/CardsSkeleton";

const ProductsList = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <CardsSkeleton />;
  }
  return (
    <section>
      <div className="px-5 w-full ">
        <div className="flex flex-col px-3 py-2 rounded-md bg-neutral-100 overflow-y-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
            {products?.map((product, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md w-[200px] h-[300px] bg-white p-2 relative"
              >
                <div className="w-full h-[200px] ">
                  <img
                    src={product.imageUrl}
                    alt="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-black font-semibold text-xl truncate">
                    {product.name}
                  </h1>
                  <p className="text-red-500">${product.price}</p>
                </div>
                <FloatMenu id={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
