import React from "react";
import { FiPlusCircle } from "react-icons/fi";
const ProductsHeader = () => {
  return (
    <section>
      <div className="p-5 w-full">
        <div className="flex items-center bg-neutral-100 rounded-md justify-between py-3 px-2">
          <h1 className="text-black font-bold text-2xl">All Products</h1>
          <button className="flex items-center px-4 py-2 bg-neutral-800 rounded-lg hover:opacity-75 hover:scale-110 transition gap-x-3">
            <FiPlusCircle className="text-white" />
            <p className="text-white font-semibold text-sm">ADD NEW PRODUCT</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsHeader;
