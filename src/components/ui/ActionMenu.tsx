"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const ActionMenu = () => {
  const router = useRouter();
  const toCartPage = () => router.push("/cart");
  const toFavoritePage = () => router.push("/favorites");
  return (
    <div className="flex flex-col gap-x-2 w-full h-auto gap-y-3">
      <IoSearch
        size={25}
        className="text-white hover:scale-110  transition  cursor-pointer hover:text-blue-500"
      />
      <FaRegHeart
        size={25}
        className="text-white hover:scale-110  transition cursor-pointer hover:text-blue-500"
        onClick={toFavoritePage}
      />
      <GrCart
        size={25}
        className="text-white hover:scale-110  transition cursor-pointer hover:text-blue-500"
        onClick={toCartPage}
      />
    </div>
  );
};

export default ActionMenu;
