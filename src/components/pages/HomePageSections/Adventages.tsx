import { adventages } from "@/constants/tools";
import React from "react";

const Adventages = () => {
  return (
    <section className="mt-[100px]">
      <div className="constiner">
        <div className="flex itrems-center  flex-wrap gap-x-[95px] justify-center ">
          {adventages.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-y-3">
              <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-neutral-400">
                <item.icon
                  size={50}
                  className="text-white bg-black p-2 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-y-1 items-center justify-center ">
                <h1 className="text-black font-bold text-xl ">{item.title}</h1>
                <p className="text-black text-sm ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventages;
