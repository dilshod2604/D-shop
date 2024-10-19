import React from "react";
import Navbar from "../ui/Navbar";
import SearchTrack from "../ui/SearchTrack";
import Actions from "../ui/Actions";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Categoryies from "../ui/Categoryies";
import BurgerButton from "../ui/BurgerButton";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-start justify-between pt-5 pb-2 border-b border-neutral-400">
          <div className="flex items-center justify-center  overflow-hidden">
            <Image src={logo} alt="logo" className="w-[30px] h-[30px]" />
            <span className="flex items-center text-sky-600 font-bold max-md:hidden">
              D-<p className="text-pink-600  ">shop</p>
            </span>
          </div>
          <Navbar />
          <div className="flex items-center gap-x-4 ">
            <SearchTrack />
            <Actions />
            <Categoryies />
            <BurgerButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
