import React from "react";
import FooterList from "./FooterSections/FooterList";

const Footer = () => {
  return (
    <footer className="text-white  bg-neutral-900 py-[50px]">
      <div className="container">
        <div>
          <FooterList />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
