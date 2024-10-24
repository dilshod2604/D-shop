"use client";
import { useGetProductsQuery } from "@/redux/api/product";
import React from "react";

const ProductsList = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <section>
      <div className="px-5 w-full">
        <div className="flex flex-col  px-3 py-2 rounded-md bg-neutral-100">
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
            {products?.map((product, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md w-[200px] h-[300] bg-white p-2 "
              >
                <div className="w-full h-[200px]">
                  <img
                    src={product.imageUrl}
                    alt="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-black font-semibold text-xl truncate">
                    {product.name}
                  </h1>
                  <p className="text-red-500">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
