"use client";
import InlineSkeleton from "@/components/ui/InlineSkeleton";
import {
  useDeleteFavoritesMutation,
  useGetFavoriteProductsQuery,
} from "@/redux/api/addFavorite";
import { useGetMeQuery } from "@/redux/api/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const FavoriteProducts = () => {
  const router = useRouter();
  const { data: me } = useGetMeQuery();
  const { data: favorites, isLoading } = useGetFavoriteProductsQuery(me?.id!, {
    skip: !me?.id,
  });
  const [deleteFavorite] = useDeleteFavoritesMutation();
  const deleteFavoriteProduct = async (id: string) => {
    try {
      await deleteFavorite(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <InlineSkeleton />;
  }
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-3">
          {favorites?.map((item) => (
            <div
              key={item.id}
              className="flex items-center  justify-between px-4 py-2 rounded-md bg-neutral-50 max-sm:flex-col max-sm:items-start"
            >
              <div className="flex gap-x-4 items-center ">
                <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
                  <Image
                    src={item.product.imageUrl}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <h1
                  className="text-black font-bold hover:scale-110 hover:underline transition cursor-pointer"
                  onClick={() => router.push(`/products/${item.product.id}`)}
                >
                  {item.product.name}
                </h1>
              </div>
              <MdDelete
                size={40}
                className="text-red-500   rounded-md p-2 hover:scale-110 transition cursor-pointer"
                onClick={() => deleteFavoriteProduct(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteProducts;
