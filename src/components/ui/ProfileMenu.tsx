"use client";
import Link from "next/link";
import React from "react";
import { LuUser2 } from "react-icons/lu";
import { BsBox2 } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { useGetMeQuery, useLogOutMutation } from "@/redux/api/auth";
import { FaHeart } from "react-icons/fa";

const ProfileMenu = () => {
  const [logOut] = useLogOutMutation();
  const handleLogOut = async () => {
    const res = await logOut();
    window.location.reload();
  };
  const { data: me } = useGetMeQuery();
  return (
    <div className="flex flex-col gap-y-2">
      <Link
        href="#"
        className="flex items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110  "
      >
        <LuUser2 size={25} className="text-white" />
        <p className="text-white font-bold ">My account</p>
      </Link>
      <Link
        href="#"
        className="flex items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
      >
        <BsBox2 size={25} className="text-white" />
        <p className="text-white font-bold ">My order</p>
      </Link>
      {me?.email && (
        <Link
          href="/favorites"
          className="flex items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
        >
          <FaHeart size={25} className="text-white" />
          <p className="text-white font-bold ">My Favorites</p>
        </Link>
      )}
      {me?.role === "ADMIN" && (
        <Link
          href="/admin"
          className="flex items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
        >
          <RiAdminLine size={25} className="text-white" />
          <p className="text-white font-bold ">Admin</p>
        </Link>
      )}

      {me?.email && (
        <button
          className="text-white font-bold flex items-center gap-x-3 py-2 px-2 border hover:scale-110 rounded-md "
          onClick={handleLogOut}
        >
          <HiOutlineLogout size={25} className="text-white" />
          <p className="text-white font-bold ">Logout</p>
        </button>
      )}
    </div>
  );
};

export default ProfileMenu;
