import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-x-1">
      <SideBar />
      <div className=" flex flex-col w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
