"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@mui/material/Button";
interface ProfileButtonProps {
  image: string;
  className?: string;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ProfileButton: FC<ProfileButtonProps> = ({
  image,
  className,
  handleClick,
  open,
}) => {
  return (
    <Button
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      className={twMerge(
        "flex items-center justify-center w-10 h-10 rounded-full overflow-hidden p-1",
        className
      )}
    >
      <img src={image} alt="avatar" />
    </Button>
  );
};

export default ProfileButton;
