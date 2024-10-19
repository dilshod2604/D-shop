"use client";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BurgerMenu = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col ">
      <ul className="flex  flex-col items-start  gap-y-5  text-black">
        {links.map((link, index) => (
          <li key={index}>
            {pathName === link.href ? (
              <Link
                href={link.href}
                className="text-white font-bold pb-2 underline transition"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-white font-normal transition   "
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
