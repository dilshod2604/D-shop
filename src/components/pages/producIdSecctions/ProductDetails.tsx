"use client";
import ProducControl from "@/components/ui/ProducControl";
import Rating from "@/components/ui/Rating";
import { useGetProductsByIdQuery } from "@/redux/api/products";
import { useParams } from "next/navigation";
import React from "react";
const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductsByIdQuery(Number(productId));
  return (
    <section className="pt-[70px]">
      <div className="container">
        <div className="flex gap-x-7 max-lg:flex-col gap-y-5 max-lg:items-center  ">
          <div className="w-[50%] h-[500px] flex items-center justify-center bg-neutral-50 rounded-md ">
            <img
              src={product?.image}
              alt="cover"
              className="max-w-[400px] h-[400px]"
            />
          </div>
          <div className="w-full h-[500px] bg-neutral-50 rounded-md flex flex-col gap-y-3 p-5 ">
            <h1 className="text-black text-3xl font-bold ">{product?.title}</h1>
            <div className="flex items-center">
              <Rating rate={product?.rating.rate!} />
            </div>
            <p className="text-black text-xl font-semibold ">
              ${product?.price}
            </p>
            <p className="text-sm ">{product?.description}</p>
            <span className="w-full h-[2px] bg-neutral-400 "></span>
            <ProducControl />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
