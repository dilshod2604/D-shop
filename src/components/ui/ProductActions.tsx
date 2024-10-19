import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const ProductActions = () => {
  return (
    <div className="flex flex-col gap-y-2 absolute  top-2 right-2">
      <FaRegHeart
        size={25}
        className="text-black "
      />
      <LuEye
        size={25}
        className="text-black"
      />
    </div>
  );
};

export default ProductActions;
