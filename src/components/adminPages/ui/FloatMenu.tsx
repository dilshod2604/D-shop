"use client";
import { useDeleteProductMutation } from "@/redux/api/product";
import { useUpdateProductStore } from "@/store/useUpdateProductStore";
import { IProducts } from "@/types/sheme";
import { FloatButton, message, Modal, Popconfirm, PopconfirmProps } from "antd";
import React, { FC, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import UpdateProduct from "./UpdateProduct";
import { useEditProductStore } from "@/store/useEditProductStore";

interface FloatMenuProps {
  id: string;
  product: IProducts;
}
const FloatMenu: FC<FloatMenuProps> = ({ product }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const { editId, setEditId, setEditProducts } = useEditProductStore();

  const [open, setOpen] = useState<boolean>(false);
  const { close, isOpen, setIsOpen } = useUpdateProductStore();

  const openFloat = (product: IProducts) => {
    if (editId! !== product.id) {
      setEditId(product.id);
      setOpen(true);
      setEditProducts(product);
    } else {
      setOpen(!open);
    }
  };
  const handleDeleteProduct: PopconfirmProps["onConfirm"] = async () => {
    try {
      await deleteProduct(product.id);
      message.success("The product is deleted");
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
        open={open && editId === product.id}
        placement="left"
        trigger="click"
        shape="circle"
        icon={
          open && editId === product.id ? (
            <RiCloseLargeFill size={25} className="text-black" />
          ) : (
            <FiMenu size={25} className="text-black" />
          )
        }
        onClick={() => openFloat(product)}
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
        <UpdateProduct />
      </Modal>
    </>
  );
};

export default FloatMenu;
