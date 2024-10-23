import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const ActionMenu = () => {
  return (
    <div className="flex flex-col gap-x-2 w-full h-auto gap-y-3">
      <IoSearch
        size={25}
        className="text-white hover:scale-110  transition  cursor-pointer"
      />
      <FaRegHeart
        size={25}
        className="text-white hover:scale-110  transition cursor-pointer"
      />
      <GrCart
        size={25}
        className="text-white hover:scale-110  transition cursor-pointer"
      />
    </div>
  );
};

export default ActionMenu;
