import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-x-1 h-[735px] overflow-y-hidden ">
      <SideBar />
      <div className=" flex flex-col w-full">
        <Header />
        <main className="relative overflow-x-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
