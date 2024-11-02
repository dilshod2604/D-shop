"use client";
import Link from "next/link";
import React from "react";
import { LuUser2 } from "react-icons/lu";
import { BsBox2 } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { useGetMeQuery, useLogOutMutation } from "@/redux/api/auth";
import { FaHeart } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProfileButton from "./ProfileButton";

const ProfileMenu = () => {
  const { data: me } = useGetMeQuery();
  const [logOut] = useLogOutMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = async () => {
    const res = await logOut();
    window.location.reload();
  };

  return (
    <div>
      <ProfileButton image={me?.photo!} open={open} handleClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link
            href="#"
            className="flex w-full items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110  "
          >
            <LuUser2 size={25} className="text-black" />
            <p className="text-black font-bold ">My account</p>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link
            href="#"
            className="flex w-full items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
          >
            <BsBox2 size={25} className="text-black" />
            <p className="text-black font-bold ">My order</p>
          </Link>
        </MenuItem>
        {me?.email && (
          <MenuItem>
            <Link
              href="/favorites"
              className="flex w-full items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
            >
              <FaHeart size={25} className="text-black" />
              <p className="text-black font-bold ">My Favorites</p>
            </Link>
          </MenuItem>
        )}

        {me?.role === "ADMIN" && (
          <MenuItem>
            <Link
              href="/admin"
              className="flex w-full items-center gap-x-3 py-2 px-2 rounded-md border hover:scale-110 "
            >
              <RiAdminLine size={25} className="text-black" />
              <p className="text-black font-bold ">Admin</p>
            </Link>
          </MenuItem>
        )}
        {me?.email && (
          <MenuItem>
            <button
              className="text-white w-full font-bold flex items-center gap-x-3 py-2 px-2 border hover:scale-110 rounded-md "
              onClick={handleLogOut}
            >
              <HiOutlineLogout size={25} className="text-black" />
              <p className="text-black font-bold ">Logout</p>
            </button>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default ProfileMenu;
