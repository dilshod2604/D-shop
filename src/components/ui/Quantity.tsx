import { TARGET_CLS } from "antd/es/_util/wave/interface";
import React, { FC, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
interface QuantityProps {
  quantity: number;
}
const Quantity: FC<QuantityProps> = ({ quantity }) => {
  const [count, setCount] = useState<number>(quantity);
  const increment = () => {
    if (count > 0) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };
  return (
    <div className="flex items-center  rounded-md">
      <FiMinus
        size={40}
        className="text-black px-2 hover:bg-red-500 hover:text-white  overflow-hidden rounded-full"
        onClick={decrement}
      />
      <input
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        type="number"
        className="bg-neutral-100  w-[50px] py-2 focus:outline-none px-2 "
      />
      <FiPlus
        size={40}
        className="text-black px-2 hover:bg-green-500 hover:text-white overflow-hidden rounded-full "
        onClick={increment}
      />
    </div>
  );
};

export default Quantity;
