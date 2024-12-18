"use client";
import { menu } from "@/constants/adminLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBarMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-2 mt-[30px] ">
      <h1 className="text-white font-bold text-lg py-2 border-b border-neutral-400 max-sm:hidden">
        Menu
      </h1>
      <ul className="flex flex-col gap-y-2">
        {menu.map((link, index) =>
          pathname === link.href ? (
            <li
              key={index}
              className="flex items-center px-2 py-2  rounded-md hover:scale-110  border hover:opacity-75 transition "
            >
              <Link href={link.href} className="flex items-center gap-x-3 ">
                <link.icon size={25} className="text-white " />
                <p className="text-white font-semibold max-sm:hidden">{link.name}</p>
              </Link>
            </li>
          ) : (
            <li
              key={index}
              className="flex items-center px-2 py-2  rounded-md hover:scale-110  hover:opacity-75 transition "
            >
              <Link href={link.href} className="flex items-center gap-x-3 ">
                <link.icon size={25} className="text-neutral-300 " />
                <p className="text-neutral-300 font-semibold max-sm:hidden">{link.name}</p>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SideBarMenu;
