"use client";
import ViewAllButton from "@/components/shared/ViewAllButton";
import AddToCart from "@/components/ui/AddToCart";
import CardsSkeleton from "@/components/ui/CardsSkeleton";
import ProductActions from "@/components/ui/ProductActions";
import Rating from "@/components/ui/Rating";
import { useGetProductsQuery } from "@/redux/api/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewColection = () => {
  const { data: poducts,isLoading } = useGetProductsQuery();
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const [curentIndex, setCurrentIndex] = useState<string>("");
  const router = useRouter();
  const onMouseEnter = (id: string) => {
    setIsEnter(true);
    setCurrentIndex(id);
  };
  const onMouseLeave = () => {
    setIsEnter(false);
    setCurrentIndex("");
  };
  if (isLoading) {
    return <CardsSkeleton className="mt-5"/>;
  }
  return (
    <section className="mt-5">
      <div className="container ">
        <div className="flex flex-col gap-y-6 ">
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
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={150}
                    height={150}
                    onClick={() => router.push(`/products/${product.id}`)}
                  />
                  <ProductActions productId={product.id} />
                  {curentIndex === product.id && <AddToCart productId={product.id} />}
                  <span className="absolute px-2 py-[2px] flex items-center justify-center rounded-md bg-green-500  top-2 left-2">
                    <p className="text-white font-semibold">New</p>
                  </span>
                </div>
                <div className="flex flex-col  gap-y-2 p-2">
                  <p
                    className="text-black truncate font-semibold hover:underline cursor-pointer"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    {product.imageUrl}
                  </p>
                  <span className="text-red-500 font-semibold flex items-center gap-x-1">
                    ${product.price}
                  </span>
                  <Rating rate={product.rating} />
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

export default NewColection;
