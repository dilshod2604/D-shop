"use client";
import { useBurgerStore } from "@/store/useBurgerStore";
import React from "react";

const BurgerButton = () => {
  const { isOpen, setIsOpen } = useBurgerStore();
  const firstChildStyle = isOpen
    ? "bg-black w-[30px] h-1 rounded-sm absolute rotate-45 transition-all duration-300 ease-in-out translate-y-0"
    : "bg-black w-[30px] h-1 rounded-sm absolute translate-y-[-8px] transition-all duration-300 ease-in-out";

  const lastChildStyle = isOpen
    ? "bg-black w-[30px] h-1 rounded-sm absolute rotate-[-45deg] transition-all duration-300 ease-in-out translate-y-0"
    : "bg-black w-[30px] h-1 rounded-sm absolute translate-y-[8px] transition-all duration-300 ease-in-out";

  const centerChildStyle = isOpen
    ? "bg-black w-[30px] h-1 rounded-sm absolute opacity-0 transition-opacity duration-300 ease-in-out"
    : "bg-black w-[30px] h-1 rounded-sm absolute opacity-100 transition-opacity duration-300 ease-in-out";

  return (
    <button
      className="hidden max-lg:flex flex-col relative items-center justify-center w-[40px] h-[40px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={firstChildStyle}></span>
      <span className={centerChildStyle}></span>
      <span className={lastChildStyle}></span>
    </button>
  );
};

export default BurgerButton;
