"use client";
import DownLoadApp from "@/components/ui/DownLoadApp";
import SendEmail from "@/components/ui/SendEmail";
import React from "react";

const FooterList = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-7">
          <ul className="flex flex-col gap-y-3  text-neutral-200">
            <h1 className="font-bold text-white">Exclusive</h1>
            <li>Subscribe </li>
            <li> Get 10% off your first order </li>
            <SendEmail />
          </ul>
          <ul className="flex flex-col gap-y-3 text-neutral-200">
            <h1 className="font-bold text-white">Support</h1>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li> exclusive@gmail.com</li>
            <li> +88015-88888-9999</li>
          </ul>
          <ul className="flex flex-col gap-y-3 text-neutral-200">
            <h1 className="font-bold text-white">Account</h1>
            <li>My Account.</li>
            <li>Login / Register </li>
            <li>Cart</li>
            <li>Wishlist </li>
            <li>Shop</li>
          </ul>
          <ul className="flex flex-col gap-y-3 text-neutral-200">
            <h1 className="font-bold text-white">Quick Link</h1>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <DownLoadApp />
        </div>
      </div>
    </section>
  );
};

export default FooterList;
