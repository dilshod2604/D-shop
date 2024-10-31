"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "../ui/Preloader/Preloader";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  const [preloader, setPreloader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);
  if (preloader) {
    return <Preloader />;
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
