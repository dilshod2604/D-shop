"use client";
import AddToCart from "@/components/ui/AddToCart";
import ProductActions from "@/components/ui/ProductActions";
import Rating from "@/components/ui/Rating";
import { useSearchProductsQuery } from "@/redux/api/search";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const decodeText = decodeURIComponent(searchQuery as string);
  const { data: products } = useSearchProductsQuery(decodeText, {
    skip: !decodeText,
  });

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
  return (
    <section className="mt-[100px]">
      <div className="container ">
        <div className="flex flex-col gap-y-6 ">
          <div className="flex gap-x-4 overflow-x-auto  overflow-y-hidden scroll-hidden snap-x ">
            {products?.map((product, index) => (
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
                    className="w-[150px]
                  h-[150px]"
                    onClick={() => router.push(`/products/${product.id}`)}
                  />
                  <ProductActions />
                  {curentIndex === product.id && <AddToCart />}
                </div>
                <div className="flex flex-col  gap-y-2 p-2">
                  <p
                    className="text-black truncate font-semibold hover:underline cursor-pointer"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    {product.name}
                  </p>
                  <span className="text-red-500 font-semibold flex items-center gap-x-1">
                    ${product.price}
                  </span>
                  <Rating rate={product.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
