import { links } from "@/constants/links";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="flex items-center  gap-x-[48px] text-black">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
