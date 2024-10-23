"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import logo from "../../assets/logo.png";
import SideBarMenu from "./ui/SideBarMenu";
import SideBarManagment from "./ui/SideBarManagment";
import SideBarNotifications from "./ui/SideBarNotifications";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-[400px] h-[100vh] bg-sky-900 py-5 px-[30px]">
      <div className="flex flex-col gap-y-3 items-start">
        <div
          className="flex items-center justify-center  overflow-hidden "
          onClick={() => router.push("/admin")}
        >
          <Image src={logo} alt="logo" className="w-[30px] h-[30px]" />
          <span className="flex items-center text-sky-600 font-bold max-md:hidden">
            D-<p className="text-pink-600  ">shop</p>
          </span>
        </div>
        <SideBarMenu />
        <SideBarManagment />
        <SideBarNotifications />
      </div>
    </div>
  );
};

export default SideBar;
