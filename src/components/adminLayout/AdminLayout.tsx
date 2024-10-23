import React, { ReactNode } from "react";
import Header from "./Header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
