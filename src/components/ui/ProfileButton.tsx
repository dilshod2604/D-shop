import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
interface ProfileButtonProps {
  image: string;
  className?: string;
}
const ProfileButton: FC<ProfileButtonProps> = ({ image, className }) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg.black",
        className
      )}
    >
      <img src={image} alt="avatar" />
    </button>
  );
};

export default ProfileButton;
