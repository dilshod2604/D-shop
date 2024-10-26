"use client";
import React, { FC } from "react";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
interface ActionsProps {
  className?: string;
}
const Actions: FC<ActionsProps> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={twMerge("flex items-center gap-x-4 max-sm:hidden ", className)}
    >
      <FaRegHeart size={25} className="text-black" />
      <GrCart
        size={25}
        className="text-black"
        onClick={() => router.push("/cart")}
      />
    </div>
  );
};

export default Actions;
