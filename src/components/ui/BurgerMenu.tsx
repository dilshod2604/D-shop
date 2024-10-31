"use client";
import { links } from "@/constants/links";
import { useGetMeQuery } from "@/redux/api/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BurgerMenu = () => {
  const { data: me } = useGetMeQuery();
  const pathName = usePathname();
  return (
    <div className="flex flex-col items-start">
      <ul className="flex  flex-col items-start gap-y-5  text-black ">
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
        {!me?.email && (
          <li>
            <Link
              href={"/auth/sign-up"}
              className="text-white font-normal transition   "
            >
              Sign up
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BurgerMenu;
