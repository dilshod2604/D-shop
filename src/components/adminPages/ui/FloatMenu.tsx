"use client";
import { useDeleteProductMutation } from "@/redux/api/product";
import { useUpdateProductStore } from "@/store/useUpdateProductStore";
import { IProducts } from "@/types/sheme";
import { FloatButton, Modal, Popconfirm, PopconfirmProps } from "antd";
import React, { FC, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import UpdateProduct from "./UpdateProduct";

interface FloatMenuProps {
  product: IProducts;
}
const FloatMenu: FC<FloatMenuProps> = ({ product }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const [productId, setId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const { close, isOpen, setIsOpen } = useUpdateProductStore();

  const openFloat = (id: string) => {
    if (productId !== id) {
      setId(id);
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };
  const handleDeleteProduct: PopconfirmProps["onConfirm"] = async () => {
    try {
      await deleteProduct(product.id);
    } catch (error) {
      console.log(error);
    }
  };
  const censelDeleting: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
  };
  return (
    <>
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
        <Popconfirm
          title="Delete the product"
          description="Are you sure to delete this product"
          okText="Yes"
          cancelText="No"
          onConfirm={handleDeleteProduct}
          onCancel={censelDeleting}
        >
          <MdDelete
            size={25}
            className="text-red-500  hover:scale-110 hover:opacity-75 transition cursor-pointer "
          />
        </Popconfirm>
        <BiSolidEdit
          onClick={() => setIsOpen(true)}
          size={25}
          className="text-blue-500  hover:scale-110 hover:opacity-75 transition cursor-pointer"
        />
      </FloatButton.Group>
      <Modal
        title="Edit product"
        open={isOpen}
        onCancel={() => close(false)}
        footer={null}
      >
        <UpdateProduct product={product} />
      </Modal>
    </>
  );
};

export default FloatMenu;
