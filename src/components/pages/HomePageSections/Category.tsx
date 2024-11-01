"use client";
import React, { useState } from "react";
import { categories } from "../../../constants/links";
import { useRouter } from "next/navigation";

const Category = () => {
  const router = useRouter();
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex gap-x-4">
            <span className="w-5 h-7 bg-red-500 rounded-md "></span>
            <h1 className="text-red-500 font-bold">Categoties</h1>
          </div>
          <h1 className="text-black font-bold text-2xl mb-[50px] mt-5">
            Browse By Category
          </h1>
          <div className="flex flex-wrap  gap-x-5 justify-center gap-y-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className="w-[150px] h-[150px] border rounded-md gap-y-5 flex flex-col items-center justify-center hover:bg-red-500 hover:text-white duration-300 cursor-pointer hover:scale-110 transition-all"
                onClick={() => router.push(`/category/${item.name}`)}
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

export default Category;
