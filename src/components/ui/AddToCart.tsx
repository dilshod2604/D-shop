"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import { useAddProductToCartMutation } from "@/redux/api/cart";
import React, { FC } from "react";
interface AddToCartProps {
  productId: string;
}
const AddToCart: FC<AddToCartProps> = ({ productId }) => {
  //add to cart
  const [addProductToCart] = useAddProductToCartMutation();
  const { data: me } = useGetMeQuery();
  const addCart = async () => {
    try {
      const cartProduct = {
        userId: me?.id!,
        productId: productId,
        quantity: 0,
      };
      await addProductToCart(cartProduct);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className=" absolute bottom-0  w-full bg-neutral-900 flex items-center justify-center h-[40px] text-white font-bold hover:underline hover:opacity-75 transition  "
      onClick={addCart}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
