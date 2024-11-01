import React, { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import AddFavorites from "../shared/AddFavorites";
interface ProductActionsProps {
  productId: string;
}
const ProductActions: FC<ProductActionsProps> = ({ productId }) => {
  return (
    <div className="flex flex-col gap-y-2 absolute  top-2 right-2">
      <AddFavorites productId={productId} />
      <LuEye
        size={40}
        className="text-black border border-neutral-800 border-1 rounded-md p-2  hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition cursor-pointer"
      />
    </div>
  );
};

export default ProductActions;
