"use client";
import Rating from "@/components/ui/Rating";
import { useGetProductsQuery } from "@/redux/api/products";
import Image from "next/image";
import React from "react";
const NewProducts = () => {
  const { data: poducts } = useGetProductsQuery();

  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4">
            <span className="w-5 h-7 bg-red-500 "></span>
            <h1 className="text-red-500 font-bold">Today&apos;s</h1>
          </div>
          <div className="flex gap-x-4 ">
            {poducts?.map((product, index) => (
              <div
                key={index}
                className="flex flex-col w-[270px] h-[350px] rounded-md"
              >
                <div className="flex w-[270px] h-[270px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col  gap-y-4">
                  <p className="text-black">{product.title}</p>
                  <p className="text-red-500">${product.price}</p>
                  <Rating  rating={product.rating}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
