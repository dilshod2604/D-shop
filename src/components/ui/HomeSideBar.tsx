import { sideBarLinks } from "@/constants/links";
import { Select } from "antd";
import Link from "next/link";
import React from "react";

const HomeSideBar = () => {
  return (
    <div className="flex flex-col gap-y-4 text-black pt-[40px] border-r border-neutral-400 pr-[50px] max-sm:hidden">
      <Select defaultValue={"Woman&apos;s Fashion"} />
      <Select defaultValue={"Men&apos;s Fashion"} />

      {sideBarLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex items-center px-2 py-1 hover:border-blue-500  text-sm border border-neutral-300 rounded-md transition"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default HomeSideBar;
