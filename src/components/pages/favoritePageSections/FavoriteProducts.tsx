"use client";
import InlineSkeleton from "@/components/ui/InlineSkeleton";
import { useGetFavoriteProductsQuery } from "@/redux/api/addFavorite";
import { useGetMeQuery } from "@/redux/api/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const FavoriteProducts = () => {
  const router = useRouter();
  const { data: me } = useGetMeQuery();
  const { data: favorites, isLoading } = useGetFavoriteProductsQuery(me?.id!, {
    skip: !me?.id,
  });
  if (isLoading) {
    return <InlineSkeleton />;
  }
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-3">
          {favorites?.map((item, index) => (
            <div
              key={index}
              className="flex items-center  justify-between px-4 py-2 rounded-md bg-neutral-50 max-sm:flex-col max-sm:items-start"
            >
              <div className="flex gap-x-4 items-center ">
                <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
                  <Image
                    src={item.product.imageUrl}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <h1
                  className="text-black font-bold hover:scale-110 hover:underline transition cursor-pointer"
                  onClick={() => router.push(`/products/${item.product.id}`)}
                >
                  {item.product.name}
                </h1>
              </div>
              <FaHeartBroken
                size={40}
                className="text-red-500   rounded-md p-2 hover:scale-110 transition cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteProducts;