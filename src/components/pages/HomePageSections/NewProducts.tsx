"use client";
import ViewAllButton from "@/components/shared/ViewAllButton";
import AddToCart from "@/components/ui/AddToCart";
import ProductActions from "@/components/ui/ProductActions";
import Rating from "@/components/ui/Rating";
import { useGetProductsQuery } from "@/redux/api/products";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewProducts = () => {
  const { data: poducts } = useGetProductsQuery();
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [curentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  const onMouseEnter = (index: number) => {
    setIsEnter(true);
    setCurrentIndex(index);
  };
  const onMouseLeave = () => {
    setIsEnter(false);
    setCurrentIndex(0);
  };

  return (
    <section className="mt-[100px]">
      <div className="container ">
        <div className="flex flex-col gap-y-6 ">
          <div className="flex gap-x-4">
            <span className="w-5 h-7 bg-red-500 rounded-md "></span>
            <h1 className="text-red-500 font-bold">Today&apos;s</h1>
          </div>
          <div className="flex gap-x-4 overflow-x-auto  overflow-y-hidden scroll-hidden snap-x ">
            {poducts?.map((product, index) => (
              <div
                key={index}
                className="flex flex-col w-[250px] h-[300px] rounded-md bg-neutral-50  snap-center "
              >
                <div
                  className="flex items-center justify-center  w-[250px] h-[250px] overflow-hidden rounded-md relative"
                  onMouseEnter={() => onMouseEnter(product.id)}
                  onMouseLeave={() => onMouseLeave}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[150px]
                  h-[150px]"
                  />
                  <ProductActions />
                  {curentIndex === product.id && <AddToCart />}
                </div>
                <div className="flex flex-col  gap-y-2 p-2">
                  <p
                    className="text-black truncate font-semibold hover:underline"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    {product.title}
                  </p>
                  <span className="text-red-500 font-semibold flex items-center gap-x-1">
                    ${product.price}
                    <p className="text-neutral-400 line-through">
                      {" "}
                      (${product.rating.count})
                    </p>
                  </span>
                  <Rating rate={product.rating.rate} />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center ">
            <ViewAllButton className="max-w-[300px] rounded-lg">
              View All Products
            </ViewAllButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
