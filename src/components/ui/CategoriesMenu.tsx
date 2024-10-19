"use client";
import { sideBarLinks } from "@/constants/links";
import { Select } from "antd";
import Link from "next/link";
import React from "react";

const CategoriesMenu = () => {
  return (
    <div className="flex flex-col gap-y-4 text-black  ">
      <Select defaultValue={"Woman's Fashion"} />
      <Select defaultValue={"Men's Fashion"} />

      {sideBarLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex items-center px-2 py-1 hover:border-blue-500  text-sm border border-neutral-300 rounded-md transition bg-white text-white "
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
