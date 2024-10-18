import React from "react";
import Navbar from "../ui/Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-start justify-between pt-5 pb-2 border-b border-neutral-400">
          <div className="flex items-center justify-center ">exclisive</div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
