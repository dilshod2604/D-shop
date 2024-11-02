"use client";
import InlineSkeleton from "@/components/ui/InlineSkeleton";
import Quantity from "@/components/ui/Quantity";
import { useGetMeQuery } from "@/redux/api/auth";
import {
  useDeleteCartItemMutation,
  useGetCartProductsQuery,
} from "@/redux/api/cart";
import Image from "next/image";
import React from "react";
import { CgKey } from "react-icons/cg";
import { MdDelete } from "react-icons/md";

const ProductList = () => {
  const { data: me, isLoading: meLoading, error: meError } = useGetMeQuery();
  const [deleteCartItem] = useDeleteCartItemMutation();
  const {
    data: cartData,
    isLoading: cartLoading,
    error: cartError,
  } = useGetCartProductsQuery(me?.id!, {
    skip: !me?.id,
  });

  //deleteCartItem
  const deleteCartProducts = async (id: string) => {
    try {
      await deleteCartItem(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (cartLoading) {
    return <InlineSkeleton />;
  }
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2 w-full">
            {cartData?.map((item, index) => (
              <div
                key={index}
                className="flex p-4 justify-between rounded-md bg-neutral-50 "
              >
                <div className="flex gap-x-4 items-center">
                  <div className="w-[50px] h-[50px] rounded-md">
                    <Image
                      src={item.product.imageUrl}
                      alt="cover"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h1 className="text-black gont-semibold text-xl">
                    {item.product.name}
                  </h1>
                </div>
                <div className="flex items-center gap-x-4">
                  <Quantity quantity={item.quantity} />
                  <p className="text-green-700 font-bold ">
                    ${item.product.price * item.quantity}
                  </p>
                  <MdDelete
                    size={25}
                    className="text-black hover:text-red-500 hover:scale-110 transition-all"
                    onClick={() => deleteCartProducts(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
