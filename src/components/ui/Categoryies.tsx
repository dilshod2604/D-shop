"use client";
import { useCategoriesStore } from "@/store/useCategoriesStore";
import React from "react";
import { TbLayoutList } from "react-icons/tb";
import { TbLayoutListFilled } from "react-icons/tb";

const Categoryies = () => {
  const { isOpen, setIsOpen } = useCategoriesStore();
  return (
    <div className="hidden max-sm:flex items-center justify-center  ">
      {isOpen ? (
        <TbLayoutListFilled
          size={20}
          className="text-black"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <TbLayoutList
          size={20}
          className="text-black"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default Categoryies;
