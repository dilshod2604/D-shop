"use client";
import { links } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <ul className="flex items-center  gap-x-[48px] text-black max-lg:hidden">
      {links.map((link, index) => (
        <li key={index}>
          {pathName === link.href ? (
            <Link
              href={link.href}
              className="text-black font-bold pb-2 underline transition"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-neutral-600 font-normal transition   "
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
