"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RiAppsFill, RiAppsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { useSearchModal } from "@/store/useSearchModal";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";

export default function ActionsMenu() {
  const { setIsOpen } = useSearchModal();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  const toCartPage = () => router.push("/cart");
  const toFavoritePage = () => router.push("/favorites");
  const openModal = () => setIsOpen(true);

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
          <RiAppsFill size={25} className="text-black" />
        ) : (
          <RiAppsLine size={25} className="text-black" />
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
        <MenuItem>
          <IoSearch
            size={25}
            className="text-black hover:scale-110  transition  cursor-pointer hover:text-blue-500"
            onClick={openModal}
          />
        </MenuItem>
        <MenuItem>
          <FaRegHeart
            size={25}
            className="text-black hover:scale-110  transition cursor-pointer hover:text-blue-500"
            onClick={toFavoritePage}
          />
        </MenuItem>
        <MenuItem>
          <GrCart
            size={25}
            className="text-black hover:scale-110  transition cursor-pointer hover:text-blue-500"
            onClick={toCartPage}
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
