import React from "react";
import Navbar from "../ui/Navbar";
import SearchTrack from "../ui/SearchTrack";
import Actions from "../ui/Actions";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-start justify-between pt-5 pb-2 border-b border-neutral-400">
          <div className="flex items-center justify-center ">exclisive</div>
          <Navbar />
          <div className="flex items-center gap-x-4 ">
            <SearchTrack />
            <Actions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
