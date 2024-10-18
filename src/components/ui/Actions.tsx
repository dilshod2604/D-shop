import React from "react";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
const Actions = () => {
  return (
    <div className="flex items-center gap-x-4">
      <FaRegHeart size={25} className="text-black" />
      <GrCart size={25} className="text-black" />
    </div>
  );
};

export default Actions;
