"use client";
import Rating from "@/components/ui/Rating";
import {
  useGetProductsByIdQuery,
  useGetProductsQuery,
} from "@/redux/api/product";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Rate } from "antd";
import { useProductDetailsStore } from "@/store/useProductDitailsStore";
const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductsByIdQuery(productId);
  const { setCategory } = useProductDetailsStore();
  useEffect(() => {
    setCategory(product?.category!);
  }, [product]);

  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="w-full flex gap-x-5 justify-center ">
          <div className="flex flex-col">
            <div className="flex items-center justify-center overflow-hidden max-w-[300px] h-[400px]  rounded-md">
              <img
                src={product?.imageUrl}
                alt="cover"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col  max-w-[400px] h-[400px]  rounded-md p-4 gap-y-5">
            <h1 className="text-black font-semibold text-2xl truncate">
              {product?.name}
            </h1>
            <p className="text-black text-xl ">${product?.price}</p>
            <div>
              <div>
                <Rate allowHalf defaultValue={product?.rating} />
                <p></p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-4 ">
              <div className="flex items-center border border-neutral-700 rounded-md">
                <FiMinus
                  size={40}
                  className="text-black px-2 hover:bg-red-500 hover:text-white traansition border-r border-neutral-700"
                />
                <input
                  type="text"
                  className="bg-neutral-100  w-[50px] py-2 focus:outline-none px-2 "
                />
                <FiPlus
                  size={40}
                  className="text-black px-2 hover:bg-red-500 hover:text-white traansition border-l border-neutral-700"
                />
              </div>
              <button className="bg-red-500 px-4 py-2 flex items-center justify-center text-white font-bold hover:opacity-75 hover:scale-110 rounded-md">
                Buy Now
              </button>
              <FaRegHeart
                size={40}
                className="text-black border border-neutral-800 border-1 rounded-md p-2  hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
