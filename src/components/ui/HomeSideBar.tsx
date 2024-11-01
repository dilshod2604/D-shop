import { sideBarLinks } from "@/constants/links";
import Link from "next/link";
import React from "react";

const HomeSideBar = () => {
  return (
    <div className="flex flex-col gap-y-4 text-black pt-[50px] border-r border-neutral-400 pr-[50px] max-sm:hidden">
      {sideBarLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex items-center gap-x-4 w-[150px] px-2 py-1 hover:border-blue-500  hover:scale-110 text-sm border border-neutral-300 rounded-md transition-all "
        >
          <link.icon className="text-black" />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default HomeSideBar;
