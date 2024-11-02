"use client";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbLayoutList, TbLayoutListFilled } from "react-icons/tb";
import Link from "next/link";
import { sideBarLinks } from "@/constants/links";
import { IconButton } from "@mui/material";

const CategoriesMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hidden max-sm:flex">
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {open ? (
          <TbLayoutListFilled size={20} className="text-black" />
        ) : (
          <TbLayoutList size={20} className="text-black" />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sideBarLinks.map((link, index) => (
          <MenuItem key={index}>
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-x-4 w-[150px] px-2 py-1 hover:border-blue-500  hover:scale-110 text-sm  text-black border border-neutral-300 rounded-md transition-all "
            >
              <link.icon className="text-black" />
              {link.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CategoriesMenu;
