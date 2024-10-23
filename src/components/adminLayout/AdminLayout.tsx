import React, { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
