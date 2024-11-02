"use client";
import React, { FC } from "react";
import Button from "@mui/material/Button";
interface BurgerButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}
const BurgerButton: FC<BurgerButtonProps> = ({ handleClick, open }) => {
  const firstChildStyle = open
    ? "bg-black w-[30px] h-1 rounded-sm absolute rotate-45 transition-all duration-300 ease-in-out translate-y-0"
    : "bg-black w-[30px] h-1 rounded-sm absolute translate-y-[-8px] transition-all duration-300 ease-in-out";

  const lastChildStyle = open
    ? "bg-black w-[30px] h-1 rounded-sm absolute rotate-[-45deg] transition-all duration-300 ease-in-out translate-y-0"
    : "bg-black w-[30px] h-1 rounded-sm absolute translate-y-[8px] transition-all duration-300 ease-in-out";

  const centerChildStyle = open
    ? "bg-black w-[30px] h-1 rounded-sm absolute opacity-0 transition-opacity duration-300 ease-in-out"
    : "bg-black w-[30px] h-1 rounded-sm absolute opacity-100 transition-opacity duration-300 ease-in-out";

  return (
    <Button
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      className="hidden max-lg:flex flex-col relative items-center justify-center w-[40px] h-[40px]"
      onClick={ handleClick}
    >
      <span className={firstChildStyle}></span>
      <span className={centerChildStyle}></span>
      <span className={lastChildStyle}></span>
    </Button>
  );
};

export default BurgerButton;
