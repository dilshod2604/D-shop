import React, { FC } from "react";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
interface ActionsProps {
  className?: string;
}
const Actions: FC<ActionsProps> = ({ className }) => {
  return (
    <div
      className={twMerge("flex items-center gap-x-4 max-sm:hidden ", className)}
    >
      <FaRegHeart size={25} className="text-black" />
      <GrCart size={25} className="text-black" />
    </div>
  );
};

export default Actions;
