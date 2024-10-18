import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
