"use client";
import React, { FC } from "react";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { Badge, Skeleton } from "antd";
import { useGetMeQuery } from "@/redux/api/auth";
import { useGetFavoriteProductsQuery } from "@/redux/api/addFavorite";
import { useGetCartProductsQuery } from "@/redux/api/cart";

interface ActionsProps {
  className?: string;
}

const Actions: FC<ActionsProps> = ({ className }) => {
  const router = useRouter();
  const { data: me } = useGetMeQuery();
  const userId = me?.id!;

  const { data: favorites, isLoading: favoritesLoading } =
    useGetFavoriteProductsQuery(userId, { skip: !userId });
  const { data: cartData, isLoading: cartLoading } = useGetCartProductsQuery(
    userId,
    { skip: !userId }
  );

  const toFavoritePage = () => router.push("/favorites");
  const toCartPage = () => router.push("/cart");

  return (
    <div
      className={twMerge("flex items-center gap-x-4 max-sm:hidden", className)}
    >
      <Badge count={favorites?.length || 0}>
        {favoritesLoading ? (
          <Skeleton.Avatar active size="default" shape="circle" />
        ) : (
          <FaRegHeart
            size={25}
            className="text-black cursor-pointer hover:scale-110 hover:text-blue-500 transition"
            onClick={toFavoritePage}
          />
        )}
      </Badge>
      <Badge count={cartData?.length || 0}>
        {cartLoading ? (
          <Skeleton.Avatar active size="default" shape="circle" />
        ) : (
          <GrCart
            size={25}
            className="text-black cursor-pointer hover:scale-110 hover:text-blue-500 transition"
            onClick={toCartPage}
          />
        )}
      </Badge>
    </div>
  );
};

export default Actions;
