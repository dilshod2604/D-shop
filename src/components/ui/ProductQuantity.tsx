"use client";
import React, { ChangeEvent, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
const ProductQuantity = () => {
  const [count, setCount] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  return (
    <div className="flex items-center border border-neutral-700 rounded-md">
      <FiMinus
        size={40}
        className="text-black px-2 hover:bg-red-500 hover:text-white traansition border-r border-neutral-700  cursor-pointer"
        onClick={decrement}
      />
      <input
        value={count}
        type="text"
        className="bg-neutral-100  w-[50px] py-2 focus:outline-none px-2 "
        onChange={handleChange}
      />
      <FiPlus
        size={40}
        className="text-black px-2 hover:bg-red-500 hover:text-white traansition border-l border-neutral-700 cursor-pointer"
        onClick={increment}
      />
    </div>
  );
};

export default ProductQuantity;
