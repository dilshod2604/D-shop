"use client";
import { sideBarLinks } from "@/constants/links";
import { Select } from "antd";
import Link from "next/link";
import React from "react";

const CategoriesMenu = () => {
  return (
    <div className="flex flex-col gap-y-4 text-black z-10 ">
      {sideBarLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex items-center gap-x-4 w-[150px] px-2 py-1 hover:border-blue-500  hover:scale-110 text-sm  text-white border border-neutral-300 rounded-md transition-all "
        >
          <link.icon className="text-white" />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
