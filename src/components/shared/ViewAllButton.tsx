import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface IViewAllButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const ViewAllButton: FC<IViewAllButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        `flex items-center justify-center px-5 py-2 rounuded-md text-white font-bold hover:opacity-75 bg-red-500`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ViewAllButton;
