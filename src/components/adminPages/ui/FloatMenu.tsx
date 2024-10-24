"use client";
import { IProducts } from "@/types/sheme";
import { FloatButton } from "antd";
import React, { FC, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";

interface FloatMenuProps {
  product: IProducts;
}
const FloatMenu: FC<FloatMenuProps> = ({ product }) => {
  const [productId, setId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const openFloat = (id: string) => {
    if (productId !== id) {
      setId(id);
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };
  return (
    <FloatButton.Group
      className="absolute bottom-2 right-2 "
      open={open && productId === product.id}
      placement="left"
      trigger="click"
      shape="circle"
      icon={
        open && productId === product.id ? (
          <RiCloseLargeFill size={25} className="text-black" />
        ) : (
          <FiMenu size={25} className="text-black" />
        )
      }
      onClick={() => openFloat(product.id)}
    >
      <MdDelete
        size={25}
        className="text-red-500  hover:scale-110 hover:opacity-75 transition cursor-pointer "
      />
      <BiSolidEdit
        size={25}
        className="text-blue-500  hover:scale-110 hover:opacity-75 transition cursor-pointer"
      />
    </FloatButton.Group>
  );
};

export default FloatMenu;
