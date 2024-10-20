import React from "react";
import image from "../../../assets/Frame 694@3x.png";
import Image from "next/image";

const TopProduct = () => {
  return (
    <section className="mt-[70px]">
      <div className="container">
        <div className="flex relative items-center bg-neutral-900 rounded-md w-full h-[500px] p-[65px] max-sm:p-5   ">
          <div className="flex flex-col gap-y-8 z-20">
            <p className="text-green-400 text-sm font-bold">Categories </p>
            <h1 className="text-white font-bold max-w  max-w-[400px] text-5xl ">
              Enhance Your Music Experience
            </h1>
            <div className="flex items-center "></div>
            <button className="flex items-center max-w-[200px] justify-center bg-green-400 px-4 py-2 text-white hover:opacity-75 transition font-bold  rounded-lg">
              Buy Now!
            </button>
          </div>
          <div className="max-w-[568px] h-[330px] overflow-hidden absolute right-[60px]  top-[100px] max-sm:right-5 max-lg:brightness-50">
            <Image src={image} alt="cover" className="w-full h-full " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProduct;
