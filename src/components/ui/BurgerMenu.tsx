import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BurgerButton from "./BurgerButton";
import { useGetMeQuery } from "@/redux/api/auth";
import { usePathname } from "next/navigation";
import { links } from "@/constants/links";
import Link from "next/link";

const BurgerMenu = () => {
  const { data: me } = useGetMeQuery();
  const pathName = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="hidden max-lg:flex">
      <BurgerButton handleClick={handleClick} open={open} />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {links.map((link, index) => (
          <MenuItem key={index}>
            {pathName === link.href ? (
              <Link
                href={link.href}
                className="text-black font-bold pb-2 underline  transition"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-black font-normal transition   "
              >
                {link.name}
              </Link>
            )}
          </MenuItem>
        ))}
        {!me?.email && (
          <MenuItem>
            <Link
              href={"/auth/sign-up"}
              className="text-black font-normal transition   "
            >
              Sign up
            </Link>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
