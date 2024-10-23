"use client";
import { useAddProductStore } from "@/store/useAddProductStore";
import { Modal } from "antd";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
const ProductsHeader = () => {
  const { close, isOpen, setIsOpen } = useAddProductStore();
  return (
    <section>
      <div className="p-5 w-full">
        <div className="flex items-center bg-neutral-100 rounded-md justify-between py-3 px-2">
          <h1 className="text-black font-bold text-2xl">All Products</h1>
          <button
            className="flex items-center px-4 py-2 bg-neutral-800 rounded-lg hover:opacity-75 hover:scale-110 transition gap-x-3"
            onClick={() => setIsOpen(true)}
          >
            <FiPlusCircle className="text-white" />
            <p className="text-white font-semibold text-sm max-sm:hidden">
              ADD NEW PRODUCT
            </p>
          </button>
        </div>
      </div>
      <Modal
        title="Create new product"
        open={isOpen}
        onCancel={() => close(false)}
      >
        
      </Modal>
    </section>
  );
};

export default ProductsHeader;
