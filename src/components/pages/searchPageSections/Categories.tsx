"use client";
import { categories } from "@/constants/links";
import React from "react";

const Categories = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-2xl mb-[50px] mt-5">
            Browse By Category
          </h1>
          <div className="flex flex-wrap  gap-x-5 justify-center gap-y-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className="w-[150px] h-[150px] border rounded-md gap-y-5 flex flex-col items-center justify-center hover:bg-red-500 hover:text-white transition duration-300 "
              >
                <item.icon size={50} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
