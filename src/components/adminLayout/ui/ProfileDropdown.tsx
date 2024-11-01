"use client";
import { useAdminButtonStore } from "@/store/useAdminButtonStore";
import { Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const items: MenuProps["items"] = [
  {
    label: (
      <Link
        href="/admin/profile"
        className="text-black font-bold hover:scale-110 hover:text-blue-500 transition-all"
      >
        My profile
      </Link>
    ),
    key: "0",
  },
];

const ProfileDropdown = () => {
  const { isOpen, setIsOpen } = useAdminButtonStore();

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button
        className="flex items-center justify-center py-2 px-3 rounded-md gap-x-2 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-black font-semibold">Admin</p>
        {isOpen ? (
          <IoIosArrowUp className="text-black" />
        ) : (
          <IoIosArrowDown className="text-black" />
        )}
      </button>
    </Dropdown>
  );
};

export default ProfileDropdown;
