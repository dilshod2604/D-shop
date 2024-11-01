"use client";
import React from "react";
import { CgSearch } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";
import { useAdminButtonStore } from "@/store/useAdminButtonStore";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropdown from "./ui/ProfileDropdown";

const Header = () => {

  return (
    <div className="bg-sky-900 w-full h-[70px] flex items-center justify-end p-3 ">
      <div className="flex gap-x-4 items-center">
        <CgSearch size={25} className="text-white" />
        <BsFillBellFill size={25} className="text-white" />
        {/* <button
          className="flex items-center justify-center py-2 px-3 rounded-md gap-x-2 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-black font-semibold">Admin</p>
          {isOpen ? (
            <IoIosArrowUp className="text-black" />
          ) : (
            <IoIosArrowDown className="text-black" />
          )}
        </button> */}
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
